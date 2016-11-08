class CreateApiContributions < ActiveRecord::Migration
  def change
    create_table :api_contributions do |t|

      t.timestamps null: false
    end
  end
end
