class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :artist, :genre, :date, :venue_id
  belongs_to :venue
end
