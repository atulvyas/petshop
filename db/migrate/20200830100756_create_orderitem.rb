class CreateOrderitem < ActiveRecord::Migration[6.0]
  def change
    create_table :orderitems do |t|
      t.integer :petinfo_id
      t.integer :order_id
      t.integer :quantity
      t.integer :price_inr
    end
  end
end
