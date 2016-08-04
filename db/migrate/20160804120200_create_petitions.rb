class CreatePetitions < ActiveRecord::Migration
  def change
    create_table :petitions do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.text :body
      t.timestamps null: false
    end
  end
end
