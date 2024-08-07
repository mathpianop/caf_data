class Api::ContactsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    contacts = Contact.all
    render json: contacts
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save!
      render json: @contact
    else
      p @contact
      render json: @contact.errors
    end
  end

  def show
  end

  def destroy
  end

  def update
    @contact = Contact.find(params[:id])
    @contact.update(contact_params)

    if @contact.save!
      render json: @contact
    else
      p @contact
      render json: @contact.errors
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :parish_id)
  end
end
