module Api
  class CategoriesController < ApplicationController
    before_action :set_category, only: [:show]

    # GET /api/categories
    def index
      @categories = Category.all
      render json: @categories
    end

    # GET /api/categories/:id
    def show
      render json: @category,include: :recipes
    end

    private
    def set_category
      @category = Category.find(params[:id])
    end
  end
end
