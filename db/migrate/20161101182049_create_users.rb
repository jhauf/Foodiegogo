class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :picture_url
      t.text :description
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps null: false
    end
  end
end
