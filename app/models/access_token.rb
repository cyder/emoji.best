class AccessToken < ApplicationRecord
  before_create :generate_token, :update_expiration
  belongs_to :user

  scope :before_expired, -> { where("expires_at > ?", Time.current) }

  def update_expiration
    self.expires_at = 1.month.since # 30日間有効
  end

  private

    def generate_token
      self.token = "#{user.id}:#{SecureRandom.hex}"
    end
end
