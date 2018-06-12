FactoryBot.define do
  factory :emoji do
    user
    name "sample_emoji"
    description "sample"
    image Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "images", "indian.png"))
  end
end
