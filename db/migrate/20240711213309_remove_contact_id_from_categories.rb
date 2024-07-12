class RemoveContactIdFromCategories < ActiveRecord::Migration[7.1]
  def change
    remove_column :categories, :contact_id
  end
end
