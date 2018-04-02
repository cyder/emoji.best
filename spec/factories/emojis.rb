FactoryBot.define do
  factory :emoji do
    user
    name "sample_emoji"
    description "sample"
    original_image_url "orizinal_image"
    large_image_url "large_image"
    thumbnail_image_url "thumbnail_image"
    slack_image_url "slack_image"
  end
end
