class DownloadLog < ApplicationRecord
  belongs_to :emoji
  belongs_to :user, optional: true
end
