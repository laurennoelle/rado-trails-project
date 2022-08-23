class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :city, :length, :est_time
end
