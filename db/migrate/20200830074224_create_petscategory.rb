class CreatePetscategory < ActiveRecord::Migration[6.0]
  def change
    create_table :petscategories do |t|
      t.string :category_name
      t.timestamps
    end
  end
end
