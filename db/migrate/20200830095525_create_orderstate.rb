class CreateOrderstate < ActiveRecord::Migration[6.0]
  def change
    create_table :orderstates do |t|
      t.string :order_status
    end
  end
end
