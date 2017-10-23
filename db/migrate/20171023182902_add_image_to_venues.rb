class AddImageToVenues < ActiveRecord::Migration[5.1]
  def change
    add_column :venues, :image, :string
  end
end
