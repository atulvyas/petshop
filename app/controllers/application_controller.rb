class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        user ||= User.find(session[:user_id]) if session[:user_id]
        if(user)
           render json: {status:1}, status: :ok
        else
            render json: {status:0}, status: :ok
        end  
    end

    def logged_in?
        !!current_user
    end

    def require_user
        if !logged_in?
           render json: @current_user, status: :ok
        end
    end
end
