FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@factory.com" }
    password "password"
    password_confirmation "password"
    name "name"
  end

  factory :user_with_twitter, class: User do
    name "user with twitter"
    twitter "twitter id"
  end
end
