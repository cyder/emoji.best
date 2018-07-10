class User < ApplicationRecord
  authenticates_with_sorcery! do |config|
    config.authentications_class = Authentication
  end

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_many :emojis, dependent: :destroy
  has_many :tags, dependent: :destroy
  has_many :access_tokens, dependent: :destroy
  has_many :download_logs, dependent: :nullify
  has_many :authentications, dependent: :destroy
  accepts_nested_attributes_for :authentications
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true, if: -> {
    new_record? || changes[:crypted_password]
  }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

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
