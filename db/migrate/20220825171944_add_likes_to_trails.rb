class AddLikesToTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :trails, :likes, :integer
  end
end
