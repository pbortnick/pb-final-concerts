class Venue < ApplicationRecord
  has_many :concerts
  accepts_nested_attributes_for :concerts
end
