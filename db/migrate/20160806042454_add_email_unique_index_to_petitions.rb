class AddEmailUniqueIndexToPetitions < ActiveRecord::Migration
  def change
    add_index :petitions, :email, unique: true
  end
end
