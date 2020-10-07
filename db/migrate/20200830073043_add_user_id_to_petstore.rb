class AddUserIdToPetstore < ActiveRecord::Migration[6.0]
  def change
    add_column :petstores, :user_id, :integer
  end
end
