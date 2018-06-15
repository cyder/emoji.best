class Api::V1::SearchController < Api::V1::BaseController
  skip_before_action :require_valid_token

  DEFAULT_PAGE_SIZE = 10
  DEFAULT_PAGE_NUM = 0
  DEFAULT_ORDER = Emoji::OrderMethod::NEW

  def index
    @num = params[:num]&.to_i || DEFAULT_PAGE_SIZE
    @page = params[:page]&.to_i || DEFAULT_PAGE_NUM
    @order = params[:order] || DEFAULT_ORDER
    keyword = params[:keyword]&.gsub(/[[:blank:]]+/, " ")&.strip
    items = keywords.present? ? Emoji.search(keyword) : Emoji.all
    @total = items.size
    @emojis = items.order_emojis(@order).select_range(@page, @num)
  end
end
