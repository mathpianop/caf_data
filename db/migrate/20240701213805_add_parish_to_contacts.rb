class AddParishToContacts < ActiveRecord::Migration[7.1]
  def change
    add_reference :contacts, :parish, index: true
  end
end
