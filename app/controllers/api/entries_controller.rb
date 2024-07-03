class Api::EntriesController < ApplicationController
  def index
    @entries_by_category = Entry.all
                                .group_by(&:category)
                                .map {|category, entries| 
                                        [category, entries.group_by(&:grade)]
                                      }
    @entries_by_parish = Entry.all.group_by(&:parish)

    render json: {category: @entries_by_category, parish: @entries_by_parish}, include: :parish
  end

  def create
  end

  def show
  end

  def destroy
  end
end
