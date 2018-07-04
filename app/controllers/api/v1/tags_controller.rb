class Api::V1::TagsController < Api::V1::BaseController
  before_action :set_emoji, only: [:create, :destroy]

  def create
    @tag = Tag.create!(tag_params.merge({
      emoji: @emoji,
      user: current_user,
    }))
  end

  def destroy
    @emoji.tags.find(params[:id]).destroy
  end

  private

    def tag_params
      params.require(:tag).permit(:name)
    end

    def set_emoji
      @emoji = Emoji.find(params[:emoji_id])
    end
end
