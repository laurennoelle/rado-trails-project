class Review < ApplicationRecord
    # belongs_to :user 
    # belongs_to :trail

    validates :username, presence: true
    validates :comment, inclusion: {in: 0..200}
    validates :rating, numericality: {greater_than: 0}


end
