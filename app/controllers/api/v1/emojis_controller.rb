class Api::V1::EmojisController < Api::V1::BaseController
  def create
    @emoji = current_user.emojis.create! emoji_params
  end

  private

    def emoji_params
      params.require(:emoji).permit(:name, :description, :image)
    end
end
