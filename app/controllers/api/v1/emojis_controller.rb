class Api::V1::EmojisController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: :show

  def create
    @emoji = current_user.emojis.build emoji_params
    @emoji.remote_image_url = params[:emoji][:image]
    @emoji.save!
  end

  def show
    @emoji = Emoji.find(params[:id])
  end

  def upload
    image = params[:image]
    unless image.instance_of?(ActionDispatch::Http::UploadedFile)
      error = "bad request"
      render template: "api/v1/errors/error", locals: { errors: error }, status: :bad_request
      return
    end
    file = image.tempfile
    uploader = TmpEmojiUploader.new
    uploader.store!(file)
    @url = uploader.url
  end

  private

    def emoji_params
      params.require(:emoji).permit(:name, :description)
    end
end
