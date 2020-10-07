class CreateOrder < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :petstore_id
      t.integer :orderstate_id
      t.string  :address
      t.integer :pincode
      t.timestamps
    end
  end
end
