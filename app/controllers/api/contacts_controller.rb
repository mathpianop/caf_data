class Api::ContactsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    contacts = Contact.all
    render json: contacts
  end

  def create
  end

  def show
  end

  def destroy
  end
end
