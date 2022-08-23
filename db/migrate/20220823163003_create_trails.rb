class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :img_url
      t.string :city
      t.integer :length
      t.integer :est_time

      t.timestamps
    end
  end
end
