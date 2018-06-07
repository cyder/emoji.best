class User < ApplicationRecord
  authenticates_with_sorcery!

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_many :emojis, dependent: :destroy
  has_many :access_tokens, dependent: :destroy
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true
  validates :password_confirmation, presence: true

  scope :find_from_access_token, ->(token) {
    joins(:access_tokens).
      merge(AccessToken.where(token: token).before_expired)
  }

  def activate
    AccessToken.create(user: self)
  end
end
