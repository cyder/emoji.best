class AddUniqueIndexToTag < ActiveRecord::Migration[5.1]
  def change
    add_index :tags, [:emoji_id, :name], unique: true
  end
end
