module Api
  class RecipesController < ApplicationController
    before_action :set_recipe, only: [:show]

    # GET /api/recipes
    def index
      @recipes = Recipe.all
      render json: @recipes, include: [:materials, :how_tos]
    end

    # GET /api/recipes/:id
    def show
      render json: @recipe, include: [:materials, :how_tos, :category]
    end

    # GET /api/recipes/search?query=:query
    def search
      query = params[:query]
      @recipes = Recipe.includes(:materials, :how_tos, :category).where("title LIKE ?", "%#{query}%")
      render json: @recipes, include: [:materials, :how_tos, :category]
    end

    private
    def set_recipe
      @recipe = Recipe.includes(:category, :materials, :how_tos).find(params[:id])
    end
  end
end
