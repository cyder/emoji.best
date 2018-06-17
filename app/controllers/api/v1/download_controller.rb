class Api::V1::DownloadController < Api::V1::BaseController
  include ActionController::Streaming
  include Zipline

  skip_before_action :require_valid_token, if: -> {
    request.headers[:Authorization].blank?
  }
  ZIP_FILENAME = "emojis.zip".freeze

  def index
    emoji_ids = params[:emojis] || []
    DownloadLog.transaction do
      emoji_ids.each do |emoji_id|
        DownloadLog.create!(emoji_id: emoji_id, user: current_user)
      end
    end

    files = get_slack_image_files(emoji_ids)
    zipline(files, ZIP_FILENAME)
  end

  private

    def get_slack_image_files(emoji_ids)
      emojis = Emoji.where(id: emoji_ids)
      files = emojis.group_by(&:name).map do |key, value|
        value.map.with_index(1) do |emoji, i|
          image = emoji.image.slack
          extension = image.file.extension
          filename = if value.size == 1
                       "#{key}.#{extension}"
                     else
                       "#{key}(#{i}).#{extension}"
                     end
          [image, filename]
        end
      end
      files.flatten(1)
    end
end
