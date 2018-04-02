class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.references :emoji, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end
