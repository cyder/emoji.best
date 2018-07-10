class Api::V1::SearchController < Api::V1::BaseController
  skip_before_action :require_valid_token, if: -> {
    request.headers[:Authorization].blank?
  }

  DEFAULT_PAGE_SIZE = 10
  DEFAULT_PAGE_NUM = 0
  DEFAULT_ORDER = Emoji::ORDER_METHOD[:new]
  DEFAULT_TARGET = Emoji::TARGET_METHOD[:all]

  def index
    check_params

    # keywordが指定されており、最初のページのときは検索ログを残す
    if @keyword.present? && @page == DEFAULT_PAGE_NUM
      SearchLog.create!(user: current_user, keyword: @keyword, order: @order, target: @target)
    end

    items = @keyword.present? ? Emoji.search_with_target(@keyword, @target) : Emoji.all
    @total = items.size
    @emojis = items.order_emojis(@order).select_range(@page, @num).includes([:tags, :user])
  end

  private

    def check_params
      @num = params[:num]&.to_i || DEFAULT_PAGE_SIZE
      @page = params[:page]&.to_i || DEFAULT_PAGE_NUM
      @order = params[:order] || DEFAULT_ORDER
      @target = params[:target] || DEFAULT_TARGET
      @keyword = params[:keyword]&.gsub(/[[:blank:]]+/, " ")&.strip
    end
end
