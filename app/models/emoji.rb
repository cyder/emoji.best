class Emoji < ApplicationRecord
  mount_uploader :image, EmojiUploader
  belongs_to :user
  has_many :download_logs, dependent: :destroy
  has_many :tags, dependent: :destroy
  validates :name, presence: true
  validates :description, presence: true
  validates :image, presence: true

  module OrderMethod
    NEW = "new".freeze
    POPULAR = "popular".freeze
  end

  def number_of_downloaded
    download_logs.size
  end

  scope :keyword_search, ->(keyword) {
    str = "%#{keyword}%"
    where("name LIKE ? or description LIKE ?", str, str)
      .or(where(id: Tag.select(:emoji_id).keyword_search(keyword).distinct))
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
    when OrderMethod::NEW
      order_by_newest
    when OrderMethod::POPULAR
      order_by_popularity
    end
  }
end
