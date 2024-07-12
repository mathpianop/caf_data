class RemoveContactRequirementFromCategories < ActiveRecord::Migration[7.1]
  def change
    remove_column :categories, :contact_id
    add_reference :categories, :contact, null: true, foreign_key: true
  end
end
