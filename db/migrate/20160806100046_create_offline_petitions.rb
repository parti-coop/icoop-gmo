class CreateOfflinePetitions < ActiveRecord::Migration
  def change
    create_table :offline_petitions do |t|
      t.integer :offline_count, null:false
      t.timestamps null: false
    end
  end
end
