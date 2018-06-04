class Api::V1::SearchController < ApplicationController
  def index
    @emojis = Emoji.all
  end
end
