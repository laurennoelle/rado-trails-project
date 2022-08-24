class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :comment, :rating, :user_id, :trail_id
  # has_one :user
  # has_one :trail
end
