class RemoveCategoryFromEntries < ActiveRecord::Migration[7.1]
  def change
    remove_column :entries, :category
  end
end
