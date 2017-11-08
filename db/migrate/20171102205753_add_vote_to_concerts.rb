class AddVoteToConcerts < ActiveRecord::Migration[5.1]
  def change
    add_column :concerts, :vote, :integer
  end
end
