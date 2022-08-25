class User < ApplicationRecord
    has_many :reviews
    has_many :review, through: :trails

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, inclusion: {in: 0..8}
end
