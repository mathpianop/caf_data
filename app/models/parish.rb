class Parish < ApplicationRecord
    has_one :contact
    has_many :entries
end
