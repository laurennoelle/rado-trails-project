class TrailsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    def index
        trails = Trail.all 
        render json: trails, except: [:created_at, :updated_at], status: :ok
    end

    def show
        trail = Trail.find(params[:id])
        render json: trail, except: [:created_at, :updated_at], status: :ok 
    end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created

    end

    def update 
        trail = Trail.find(params[:id])
        trail.update(trail_params)
        render json: trail, status: :accepted
    end 

    def destroy
        trail = Trail.find(params[:id])
        trail.destroy
        head :no_content

    end

private

    def trail_params
        params.permit(:name, :img_url, :city, :length, :est_time)
    end

    def record_not_found
        render json: { error: "Trail not found" }, status: :not_found
    end

    def unprocessable_entity(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
