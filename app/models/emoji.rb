class Emoji < ApplicationRecord
  belongs_to :user
  has_many :download_logs
  has_many :tags

  def number_of_donwloaded
    download_logs.count
  end

  scope :keyword_search, ->(keyword) {
    str = "%#{keyword}%"
    where("name LIKE ? or description LIKE ?", str, str).
      or(where(id: Tag.select(:emoji_id).keyword_search(keyword).distinct))
  }

  scope :order_by_newest, -> {
    order(created_at: :desc, id: :desc)
  }

  scope :order_by_popularity, -> {
    select("emojis.*, COUNT(download_logs.id) AS num_of_donwloaded").
      left_joins(:download_logs).
      group(:id).
      order("num_of_donwloaded DESC").
      order_by_newest
  }
end
