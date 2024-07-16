class Api::CategoriesController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        @categories = Category.order(:id)
        render json: @categories
    end

    def update
        @category = Category.find(params[:id])
        @category.judges = category_params[:judges]

        if @category.save
            render json: @category
          else
            render json: @category.errors
          end
    end

    private

    def category_params
        params.require(:category).permit(:judges)
    end
end
