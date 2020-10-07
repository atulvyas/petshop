class AddHasStoreToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :has_store, :boolean, default: false
  end
end
