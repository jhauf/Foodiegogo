class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :name, null: false
      t.integer :goal_amt, null: false
      t.integer :current_amt
      t.text :description, null: false
      t.date :end_date, null: false
      t.string :picture_url
      t.integer :campaigner_id
    end
  end
end
