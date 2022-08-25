class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user, except: [:created_at, :updated_at], status: :ok 
    end
end
