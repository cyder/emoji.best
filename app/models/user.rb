class User < ApplicationRecord
  authenticates_with_sorcery!

  has_many :emojis, dependent: :destroy
end
