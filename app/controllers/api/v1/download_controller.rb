class Api::V1::DownloadController < Api::V1::BaseController
  include ActionController::Streaming
  include Zipline

  skip_before_action :require_valid_token, if: -> {
    request.headers[:Authorization].blank?
  }
  ZIP_FILENAME = "emojis.zip".freeze

  def index
    ActiveRecord::Base.transaction do
      emojis = Emoji.where(id: params[:emojis])
      emojis.each {|emoji| emoji.download_logs.create!(user: current_user) }
      files = emojis.map do |emoji|
        file = emoji.image.slack
        filename = filename(emojis, emoji)
        [file, filename]
      end
      zipline(files, ZIP_FILENAME)
    end
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
