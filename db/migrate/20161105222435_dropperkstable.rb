class Dropperkstable < ActiveRecord::Migration
  def change
    drop_table :perks
  end
end
