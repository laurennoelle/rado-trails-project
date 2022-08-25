class AddMapToTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :trails, :map, :string
  end
end
