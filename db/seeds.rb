# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(
  name: "test",
  email: "test@test.com",
  password: "password",
  password_confirmation: "password",
)

emoji = Emoji.create(
  user: user,
  name: "sample_emoji_with_tag",
  description: "with tag",
  image: File.open(Rails.root.join("spec", "fixtures", "images", "indian.png")),
)

5.times do |no|
  Tag.create(
    user: user,
    emoji: emoji,
    name: "sample tag#{no}",
  )
end

100.times do |no|
  Emoji.create(
    user: user,
    name: "sample_emoji#{no}",
    description: "sample",
    image: File.open(Rails.root.join("spec", "fixtures", "images", "indian.png")),
  )
end
