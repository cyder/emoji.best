class AccessToken < ApplicationRecord
  before_create :generate_token, :set_expiration
  belongs_to :user

  scope :before_expired, -> { where("expires_at > ?", Time.current) }

  private

    def generate_token
      self.token = "#{user.id}:#{SecureRandom.hex}"
    end

    def set_expiration
      self.expires_at = Time.current + 1.month # 30日間有効
    end
end
