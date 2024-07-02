class CreateEntries < ActiveRecord::Migration[7.1]
  def change
    create_table :entries do |t|
      t.string :name
      t.integer :grade
      t.integer :score
      t.integer :category
      t.references :parish, null: false, foreign_key: true

      t.timestamps
    end
  end
end
