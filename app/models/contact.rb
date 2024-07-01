class Contact < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true, email: true
    belongs_to :parish
end
