class Tag < ApplicationRecord
  belongs_to :emoji
  belongs_to :user
  validates :name, presence: true, uniqueness: { scope: :emoji_id }
end
