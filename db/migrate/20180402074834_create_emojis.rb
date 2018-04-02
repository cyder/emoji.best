class CreateEmojis < ActiveRecord::Migration[5.1]
  def change
    create_table :emojis do |t|
      t.references :user, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :original_image_url, null: false
      t.string :large_image_url, null: false
      t.string :thumbnail_image_url, null: false
      t.string :slack_image_url, null: false

      t.timestamps
    end
  end
end
