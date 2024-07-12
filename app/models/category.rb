class Category < ApplicationRecord
  has_one :contact

  validate :restrict_count, on: :create 

  def restrict_count
    p "Calling!!!"
    p Category.all.count >= 4
    if Category.all.count >= 4
      errors.add(:base, "You can only have 4 categories!")
    end
  end
end
