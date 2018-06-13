class Api::V1::DownloadController < Api::V1::BaseController
  skip_before_action :require_valid_token, if: -> { request.headers[:Authorization].blank? }
  ZIP_FILENAME = "emojis.zip".freeze

  def index
    zip_filepath = Rails.root.join("tmp", "uploads", "zip", "#{SecureRandom.uuid}.zip")
    emojis = Emoji.where(id: params[:emojis])
    emojis.each {|emoji| emoji.download_logs.create!(user: current_user) }

    Zip::File.open(zip_filepath, Zip::File::CREATE) do |zipfile|
      emojis.each do |emoji|
        file = emoji.image.slack.file
        zipfile.add(file.basename, file.path)
      end
    end
    send_file(zip_filepath, filename: ZIP_FILENAME)
  end
end
