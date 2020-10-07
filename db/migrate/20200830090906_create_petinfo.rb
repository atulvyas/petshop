class CreatePetinfo < ActiveRecord::Migration[6.0]
  def change
    create_table :petinfos do |t|
      t.integer :petscategory_id
      t.integer :petstore_id
      t.string  :image_url
      t.integer :price_inr
      t.integer :height_infeet
      t.integer :weight_inkg
      t.integer :age
      t.string  :gender
      t.string  :breed_type
      t.string  :medical_certificate
      t.text    :precautions
      t.text    :description
      t.text    :other_stuff
    end
  end
end
