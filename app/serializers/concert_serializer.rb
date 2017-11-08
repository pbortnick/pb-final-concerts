class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :artist, :genre, :date, :venue_id, :vote
  belongs_to :venue
end
