class Entry < ApplicationRecord
  attr_accessor :rank
  attr_accessor :ribbon

  belongs_to :parish
  belongs_to :category

  validates :name, presence: true
  validates :name, uniqueness: {scope: [:category, :parish]}

  validates :score, presence: true, comparison: {greater_than_or_equal_to: 0}
  validates :score, comparison: {less_than_or_equal_to: 60}, if: :is_written_category?
  validates :score, comparison: {less_than_or_equal_to: 48}, unless: :is_written_category?

  validates :grade, presence: true, comparison: {greater_than_or_equal_to: 1, less_than_or_equal_to: 12}


  def is_written_category?
    p "Hello", category.name
    category.name == "writing" || category.name == "poetry"
  end


  def self.sort_by_score(entries)
    entries.sort_by(&:score).reverse
  end

  def self.sort_by_grade(entries)
    entries.sort_by(&:grade)
  end

  def max_scores
    num_of_judges = self.category.judges
      if (self.category.name == "art" || self.category.name == "photography")
          num_of_judges == 3 ? [35, 42, 48] : [23, 28, 32]
      elsif (self.category.name === "poetry" || self.category.name == "writing")
          num_of_judges == 3 ? [44, 53, 60] : [29, 34, 40]
      end
  end



  def ribbon
        if (self.score <= max_scores[0]) 
            "bronze"
        elsif (self.score <= max_scores[1])
            "silver"
        elsif (self.score <= max_scores[2])
            "gold"
        end
  end

  def self.uniq_scores_above(ranking_entry, uniq_scores)
    uniq_scores.count {|uniq_score| uniq_score > ranking_entry.score}
  end

  def self.add_ranks(entries)
    uniq_scores = entries.map(&:score).uniq
    entries.map do |entry| 
      rank = uniq_scores_above(entry, uniq_scores) + 1
      entry.rank = rank
      entry
    end
  end 

  def self.by_category_and_grade
    Entry.all
          .group_by {|entry| entry.category.id}
          .transform_values {|category| category.group_by(&:grade)}
  end

  def self.by_parish_and_category
    Entry.all
          .sort_by(&:grade)
          .reverse
          .group_by {|entry| entry.parish.id}
          .transform_values {|parish| parish.group_by {|entry| entry.category.id}}
  end

  def self.by_category_and_grade_with_rank
    Entry.by_category_and_grade
      .transform_values do |category|
        category.transform_values do |grade_entries|
          sort_by_score(add_ranks(grade_entries))
      end
    end
  end

  def self.by_parish_and_category_with_rank
    Entry.by_parish_and_category
      .transform_values do |parish|
        parish.transform_values do |category_entries|
          sort_by_grade(add_ranks(category_entries))
      end
    end
  end

end
