class Changecolumn < ActiveRecord::Migration
  def change
    rename_column :perks, :picture_url, :description
  end
end
