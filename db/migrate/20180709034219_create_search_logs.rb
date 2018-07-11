class CreateSearchLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :search_logs do |t|
      t.references :user, null: true
      t.string :keyword, null: false
      t.string :order, null: false
      t.string :target, null: false

      t.timestamps
    end
  end
end
