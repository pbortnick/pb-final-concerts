class Concert < ApplicationRecord
  belongs_to :venue
  after_initialize :default
  def default
    unless persisted?
      self.vote ||= 0
    end
  end
end
