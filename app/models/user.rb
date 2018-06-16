class User < ApplicationRecord
  authenticates_with_sorcery!

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_many :emojis, dependent: :destroy
  has_many :access_tokens, dependent: :destroy
  has_many :download_logs, dependent: :nullify
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true
  validates :password_confirmation, presence: true

  def activate
    AccessToken.create(user: self)
  end

  def number_of_downloaded
    download_logs.size
  end

  def number_of_uploaded
    emojis.size
  end
end
