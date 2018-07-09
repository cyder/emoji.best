class SearchLog < ApplicationRecord
  belongs_to :user, optional: true
  validates :keyword, presence: true
  validates :order, presence: true
  validates :target, presence: true
end
