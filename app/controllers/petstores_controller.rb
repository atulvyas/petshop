class PetstoresController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        store = Petstore.new(user_params)
          if store.save
             render json: store, status: :ok
          else
             render json: user.errors
          end
 
     end

     private
     def user_params
         params.require(:value).permit(:shop_name, :street, :locality ,:city, :state, :pincode, :user_id)
     end
end