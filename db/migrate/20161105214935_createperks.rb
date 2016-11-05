class Createperks < ActiveRecord::Migration
  def change
    create_table :perks do |t|
      t.string :name, null: false
      t.integer :donation_amt, null: false
      t.string :picture_url
      t.integer :campaign_id
      t.integer :contribution_id
    end
    add_index :perks, :campaign_id
    add_index :perks, :contribution_id
  end
end
