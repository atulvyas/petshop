class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    # before_action :logged_in_redirect, only: [:new, :create]
    def new
    end

    def user_present
        user ||= User.find(session[:user_id]) if session[:user_id]

        if user
         if(user.is_admin || user.has_store)
            render json: {status:1, id:user.id}, status: :ok
         else
            render json: {status:0}, status: :ok
         end
        else
           render json: {status:0}, status: :ok
        end  
    end

    def create 
        user = User.find_by(email: params[:value][:username])
        if user && user.authenticate(params[:value][:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: user.errors, status: :unprocessable_entity 
        end
    end

    def destroy
        session[:user_id] = nil
        render json: {}, status: :ok
    end

    private

    def logged_in_redirect
      if logged_in?
        flash[:error] = "you are already logged in"
        redirect_to login_path
      end
    end
end