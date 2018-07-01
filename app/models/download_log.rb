class DownloadLog < ApplicationRecord
  belongs_to :emoji, counter_cache: true
  belongs_to :user, optional: true
end
