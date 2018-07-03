class Api::V1::TagsController < Api::V1::BaseController
  def create
    @tag = Emoji.find(params[:emoji_id]).tags.build tag_params
    @tag.user = current_user
    @tag.save!
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
