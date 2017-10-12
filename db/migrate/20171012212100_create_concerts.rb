class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.string :artist
      t.string :genre
      t.date :date
      t.integer :venue_id

      t.timestamps
    end
  end
end
