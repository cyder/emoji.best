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

Emoji.create(
  user: user,
  name: "sample_emoji1",
  description: "sample",
  original_image_url: "orizinal_image",
  large_image_url: "large_image",
  thumbnail_image_url: "thumbnail_image",
  slack_image_url: "slack_image",
)

Emoji.create(
  user: user,
  name: "sample_emoji2",
  description: "sample",
  original_image_url: "orizinal_image",
  large_image_url: "large_image",
  thumbnail_image_url: "thumbnail_image",
  slack_image_url: "slack_image",
)

Emoji.create(
  user: user,
  name: "sample_emoji3",
  description: "sample",
  original_image_url: "orizinal_image",
  large_image_url: "large_image",
  thumbnail_image_url: "thumbnail_image",
  slack_image_url: "slack_image",
)
