class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.date :date, null: false
      t.integer :donation_amt, null: false
      t.integer :campaign_id, null: false
      t.integer :contributor_id, null: false
      t.integer :perk_id
    end
    add_index :contributions, :campaign_id
    add_index :contributions, :contributor_id
    add_index :contributions, :perk_id

  end
end
