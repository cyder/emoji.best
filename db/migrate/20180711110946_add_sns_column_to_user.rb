class AddSnsColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :twitter, :string
    add_column :users, :facebook, :string
    add_column :users, :google, :string
  end
end
