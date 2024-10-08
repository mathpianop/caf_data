class Api::EntriesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @entries_by_category = Entry.by_category_and_grade_with_rank
    @entries_by_parish = Entry.by_parish_and_category_with_rank

    render json: {categories: @entries_by_category, parishes: @entries_by_parish}, include: [:parish, :category], methods: [:rank, :ribbon]
  end

  def create
    @entry = Entry.new(entry_params)
    if @entry.save!
      render json: @entry
    else
      render json: @entry.errors
    end
  end

  def show
  end

  def destroy
    @entry = Entry.find(params[:id])
    if @entry.destroy!
      render json: @entry
    else
      render json: @entry.errors
    end
  end

  private
  def entry_params
    params.require(:entry).permit(:name, :grade, :score, :category, :parish_id, :category_id)
  end
end
