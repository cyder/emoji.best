class AddColumnToEmoji < ActiveRecord::Migration[5.1]
  def change
    add_column :emojis, :download_logs_count, :integer, null: false, default: 0
  end
end
