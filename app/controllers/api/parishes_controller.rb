class Api::ParishesController < ApplicationController
  protect_from_forgery with: :null_session
  
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
