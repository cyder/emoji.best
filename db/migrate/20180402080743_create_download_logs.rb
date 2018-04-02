class CreateDownloadLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :download_logs do |t|
      t.references :emoji, null: false
      t.references :user, null: true

      t.timestamps
    end
  end
end
