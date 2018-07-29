class Api::V1::EmojisController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: :show

  def create
    @emoji = current_user.emojis.build emoji_params
    @emoji.remote_image_url = params[:emoji][:image]
    @emoji.save!
  end

  def create_multi
    @emojis = params[:emojis].map do |target|
      emoji = current_user.emojis.build emoji_params(target)
      emoji.remote_image_url = target[:emoji][:image]
      emoji.save!
      emoji
    end
  end

  def show
    @emoji = Emoji.find(params[:id])
  end

  def upload
    image = params[:image]
    unless image.instance_of?(ActionDispatch::Http::UploadedFile)
      errors = { image: "bad request" }
      render template: "api/v1/errors/error", locals: { errors: errors }, status: :bad_request
      return
    end
    uploader = TmpEmojiUploader.new
    uploader.store!(image.tempfile)
    @url = uploader.url
  end

  def update
    @emoji = current_user.emojis.find(params[:id])
    @emoji.update! emoji_params
  end

  def destroy
    current_user.emojis.find(params[:id]).destroy!
  end

  private

    def emoji_params(target = nil)
      (target || params).require(:emoji).permit(:name, :description)
    end
end
