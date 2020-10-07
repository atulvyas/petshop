class RemovePetstoreidFromUser < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :petstore_id, :integer
  end
end
