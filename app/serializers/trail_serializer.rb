class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :city, :length, :est_time, :map, :likes
  # has_many :reviews
  # has_many :reviews, through: :users
end
