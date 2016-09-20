class AddIsBodyHiddenToPetition < ActiveRecord::Migration
  def change
    add_column :petitions, :is_body_hidden, :boolean, default: false
  end
end
