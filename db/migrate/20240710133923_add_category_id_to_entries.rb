class AddCategoryIdToEntries < ActiveRecord::Migration[7.1]
  def change
    add_reference :entries, :category, index: true
  end
end
