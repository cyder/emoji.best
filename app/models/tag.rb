class Tag < ApplicationRecord
  belongs_to :emoji
  belongs_to :user

  scope :keyword_search, ->(keyword) {
    where("name LIKE ?", "%#{keyword}%")
  }

end
