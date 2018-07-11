FactoryBot.define do
  factory :search_log do
    user
    order "new"
    target "all"
    keyword "keyword"
  end
end
