class ChangeDescriptionColumnToUser < ActiveRecord::Migration[5.1]
  def change
    change_column :emojis, :description, :string, null: true
  end
end
