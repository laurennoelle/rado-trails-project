class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
        def index
            reviews = Review.all 
            render json: reviews, except: [:created_at, :updated_at], status: :ok
        end
    
        def show
            review = Review.find(params[:id])
            render json: review, except: [:created_at, :updated_at], status: :ok 
        end
    
        def create
            review = Review.create!(review_params)
            render json: review, status: :created
    
        end
    
        def update 
            review = Review.find(params[:id])
            review.update(review_params)
            render json: review, status: :accepted
        end 
    
        def destroy
            review = Review.find(params[:id])
            review.destroy
            head :no_content
    
        end
    
    private
    
        def review_params
            params.permit(:username, :comment, :rating)
        end
    
        def record_not_found
            render json: { error: "review not found" }, status: :not_found
        end
    
        def unprocessable_entity(exception)
            render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
        end
    end
