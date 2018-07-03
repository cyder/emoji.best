class Api::V1::TagsController < Api::V1::BaseController
  def create
    @tag = Tag.create!(tag_params.merge({
      emoji: Emoji.find(params[:emoji_id]),
      user: current_user,
    }))
  end

  def destroy
    @emoji = Emoji.find(params[:emoji_id])
    @emoji.tags.find(params[:id]).destroy
  end

  private

    def tag_params
      params.require(:tag).permit(:name)
    end
end
