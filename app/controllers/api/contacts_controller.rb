class Api::ContactsController < ApplicationController
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
