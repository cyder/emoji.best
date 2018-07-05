class Emoji < ApplicationRecord
  include SearchCop
  before_validation :replace_space

  mount_uploader :image, EmojiUploader
  belongs_to :user
  has_many :download_logs, dependent: :destroy
  has_many :tags, dependent: :destroy
  validates :name, presence: true, format: { with: /\A[a-z0-9\-+_]+\z/ }
  validates :description, presence: true
  validates :image, presence: true

  search_scope :search do
    attributes :name, :description
    attributes tag: "tags.name"
  end

  ORDER_METHOD = {
    new: "new",
    popular: "popular",
  }.map(&:freeze).to_h.freeze

  TARGET_METHOD = {
    all: "all",
    tag: "tag",
  }.map(&:freeze).to_h.freeze

  def number_of_downloaded
    download_logs.size
  end

  scope :search_with_target, ->(keyword, target) {
    case target
    when TARGET_METHOD[:all]
      search(keyword).group("emojis.id, tags.id")
    when TARGET_METHOD[:tag]
      joins(:tags).merge(Tag.where(name: keyword)).group("emojis.id, tags.id")
    end
  }

  scope :order_by_newest, -> {
    order(created_at: :desc, id: :desc)
  }

  scope :order_by_popularity, -> {
    left_joins(:download_logs)
      .group(:id)
      .order("COUNT(download_logs.id) DESC")
      .order_by_newest
  }

  scope :select_range, ->(page, num) {
    offset(page * num).limit(num)
  }

  scope :order_emojis, ->(method) {
    case method
    when ORDER_METHOD[:new]
      order_by_newest
    when ORDER_METHOD[:popular]
      order_by_popularity
    end
  }

  private

    def replace_space
      self.name&.tr!(" ", "_")
    end
end
