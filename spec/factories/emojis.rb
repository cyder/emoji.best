FactoryBot.define do
  factory :emoji do
    user
    name "sample_emoji"
    description "sample"
    image Rack::Test::UploadedFile.new(File.join(Rails.root, "spec/fixtures/images/indian.png"))
  end
end
