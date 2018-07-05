class Api::V1::EmojisController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: :show

  def create
    @emoji = current_user.emojis.create! emoji_params
  end

  def show
    @emoji = Emoji.find(params[:id])
  end

  def update
    @emoji = current_user.emojis.find(params[:id])
    @emoji.update! emoji_params
  end

  def destroy
    current_user.emojis.find(params[:id]).destroy
  end

  private

    def emoji_params
      params.require(:emoji).permit(:name, :description, :image)
    end
end
