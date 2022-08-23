class TrailsController < ApplicationController
    def index
        trails = Trail.all 
        render json: trails, status: :ok
    end

    def show

    end

    def create

    end

    def update 

    end 

    def destroy

    end
end
