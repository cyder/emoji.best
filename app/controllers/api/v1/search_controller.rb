class Api::V1::SearchController < Api::V1::BaseController
  skip_before_action :require_valid_token

  DEFAULT_PAGE_NUM = 10
  DEFAULT_ORDER = "new".freeze

  def index
    @num = params[:num] || DEFAULT_PAGE_NUM
    @order = params[:order] || DEFAULT_ORDER
    items = params[:keyword].present? ? Emoji.keyword_search(params[:keyword]) : Emoji.all
    ordered_items = order_emojis(items, @order)
    @total = Emoji.all.count
    @emojis = ordered_items.limit(@num)
  end

  private

    def order_emojis(items, method)
      case method
      when "new"
        items.order_by_newest
      when "popular"
        items.order_by_popularity
      end
    end
end
