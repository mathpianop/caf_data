class Entry < ApplicationRecord
  belongs_to :parish

  validates :name, presence: true
  validates :name, uniqueness: {scope: [:category, :parish]}

  enum :category, [:art, :poetry, :photography, :writing]

  validates :score, presence: true, comparison: {greater_than_or_equal_to: 0}
  validates :score, comparison: {less_than_or_equal_to: 20}, if: :is_written_category?
  validates :score, comparison: {less_than_or_equal_to: 16}, unless: :is_written_category?

  validates :grade, presence: true, comparison: {greater_than_or_equal_to: 1, less_than_or_equal_to: 12}

  def is_written_category?
    category == :writing || category == :poetry
  end
end
