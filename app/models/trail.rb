class Trail < ApplicationRecord
# has_many :reviews 
# has_many :reviews, through: :users

validates :name, presence: true
validates :img_url, presence: true
validates :city, presence: true
validates :length, numericality: { greater_than: 0 }
validates :est_time, inclusion: { in: 0..23}
  
end
