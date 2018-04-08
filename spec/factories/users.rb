FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@factory.com" }
    password "password"
    password_confirmation "password"
    name "name"
  end
end
