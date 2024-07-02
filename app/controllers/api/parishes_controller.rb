class Api::ParishesController < ApplicationController
  def index
    @parishes = Parish.all

    render json: @parishes, include: :contact
  end

  def create
  end

  def show
  end

  def destroy
  end
end
