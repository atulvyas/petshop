class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :check_mime_types
    def create
       user = User.new(user_params)
         if user.save
            render json: {id: user.id,has_store: user.has_store}, status: :ok
         else
            render json: user.errors
         end

    end

    def index
      @user = User.all
      respond_to :json
    end
   #  def create
   #      user = User.find_by(email: params[:value][:username])
   #        if user && user.authenticate(params[:value][:password])
   #           session[:user_id] = user.id
   #           render json: user, status: :ok
   #        else
   #           render json: user.errors, status: :unprocessable_entity 
   #        end
   #  end

    private
    def user_params
        params.require(:value).permit(:first_name, :last_name, :email ,:password, :contact, :has_store)
    end

end