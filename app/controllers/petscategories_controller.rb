 class PetscategoriesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @category = Petscategory.all
        render json: @category, status: :ok
    end

    def create
        category = Petscategory.new(user_params)
        if category.save
            render json: category, status: :ok
        else
            rednder json: {}, status: :ok
        end
    end

    private
    def user_params
        params.require(:value).permit(:category_name)
    end
 end