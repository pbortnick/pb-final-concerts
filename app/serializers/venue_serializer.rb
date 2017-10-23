class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :image
  has_many :concerts
end
