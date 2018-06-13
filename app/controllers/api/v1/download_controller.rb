class Api::V1::DownloadController < Api::V1::BaseController
  skip_before_action :require_valid_token, if: -> { request.headers[:Authorization].blank? }
  ZIP_FILENAME = "emojis.zip".freeze

  def index
    zip_dir = Rails.root.join("tmp", "uploads", "zip")
    zip_filepath = zip_dir.join("#{SecureRandom.uuid}.zip")
    FileUtils.mkdir_p(zip_dir) unless FileTest.exist?(zip_dir)
    emojis = Emoji.where(id: params[:emojis])
    emojis.each {|emoji| emoji.download_logs.create!(user: current_user) }

    Zip::File.open(zip_filepath, Zip::File::CREATE) do |zipfile|
      emojis.each do |emoji|
        filepath = emoji.image.slack.file.path
        filename = filename(emojis, emoji)
        zipfile.add(filename, filepath)
      end
    end
    send_file(zip_filepath, filename: ZIP_FILENAME)
  end

  private

    def filename(emojis, emoji)
      file = emoji.image.slack.file
      if emojis.where(name: emoji.name).size > 1
        "#{file.basename}(#{emoji.id}).#{file.extension}"
      else
        file.filename
      end
    end
end
