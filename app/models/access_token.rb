class AccessToken < ApplicationRecord
  before_create :generate_token, :set_expiration
  belongs_to :user

  private

    def generate_token
      self.token = "#{user.id}:#{SecureRandom.hex}"
    end

    def set_expiration
      self.expires_at = DateTime.now + 30 #30日間有効
    end
end
