class Api::V1::SearchController < ApplicationController
  DEFAULT_PAGE_NUM = 10
  DEFAULT_ORDER = "new"

  def index
    @num = params[:num] || DEFAULT_PAGE_NUM
    @order = params[:order] || DEFAULT_ORDER
    items = Emoji.all
    ordered_items = order_emojis(items, @order)
    @total = Emoji.all.count
    @emojis = items.order_by_popularity.limit(@num)
  end

  private

    def order_emojis(items, method)
      case method
      when "new" then
        items.order_by_newest
      when "popular" then
        items.order_by_popularity
      end
    end
end
