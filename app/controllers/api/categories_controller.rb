class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render json: @categories
    end

    def update
        @category = Category.find(category_params[:id])
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
