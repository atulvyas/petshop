class PetinfosController < ApplicationController
  skip_before_action :verify_authenticity_token
    before_action :set_user, only: [:show]


    def index
        @petinfos = Petinfo.all
        render json: @petinfos
    end

    def show
    end

    def create
        @petinfo = Petinfo.new(user_params)
          if @petinfo.save
            render json: @petinfo, status: :created
          else
            render json: {status: 0}, status: :ok
          end
    end

    private

    def set_user
        @user = User.find(params[:id])
    end
    
    def user_params
        params.permit(:petscategory_id, :petstore_id, :price_inr, :height_infeet, :weight_inkg, :age, :gender, :breed_type, :precautions, :description, :other_stuff, :image)
    end
end