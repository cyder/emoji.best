class ChangeImageColumnToEmoji < ActiveRecord::Migration[5.1]
  def change
    remove_column :emojis, :original_image_url, :string
    remove_column :emojis, :large_image_url, :string
    remove_column :emojis, :thumbnail_image_url, :string
    remove_column :emojis, :slack_image_url, :string
    add_column    :emojis, :image, :string, null: false, default: ""
  end
end
