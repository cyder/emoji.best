class Api::V1::SearchController < Api::V1::BaseController
  skip_before_action :require_valid_token

  DEFAULT_PAGE_SIZE = 10
  DEFAULT_PAGE_NUM = 0
  DEFAULT_ORDER = Emoji::OrderMethod::NEW
  DEFAULT_TARGET = Emoji::TargetMethod::ALL

  def index
    @num = params[:num]&.to_i || DEFAULT_PAGE_SIZE
    @page = params[:page]&.to_i || DEFAULT_PAGE_NUM
    @order = params[:order] || DEFAULT_ORDER
    @target = params[:target] || DEFAULT_TARGET
    keyword = params[:keyword]&.gsub(/[[:blank:]]+/, " ")&.strip
    items = keyword.present? ? Emoji.search_with_target(keyword, @target) : Emoji.all
    @total = items.size
    @emojis = items.order_emojis(@order).select_range(@page, @num)
  end
end
