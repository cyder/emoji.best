class CreateAccessTokens < ActiveRecord::Migration[5.1]
  def change
    create_table :access_tokens do |t|
      t.string :token, null: false
      t.references :user, null: false
      t.datetime :expires_at, null: false
    end
  end
end
