class Api::EntriesController < ApplicationController
  def index
    @entries_by_category = Entry.by_category_and_grade_with_rank
    @entries_by_parish = Entry.by_parish_and_category_with_rank

    render json: {categories: @entries_by_category, parishes: @entries_by_parish}, include: :parish, methods: :rank
  end

  def create
  end

  def show
  end

  def destroy
  end
end
