class CreatePetstore < ActiveRecord::Migration[6.0]
  def change
    create_table :petstores do |t|
      t.string :shop_name
      t.string :street
      t.string :locality
      t.string :city
      t.string :state
      t.integer :pincode
      t.timestamps
    end
  end
end
