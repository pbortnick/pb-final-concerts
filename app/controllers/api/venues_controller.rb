class Api::VenuesController < ApplicationController
  before_action :set_venue, only: [:show]

  def index
    render json: Venue.all
  end

  def show
    render json: @venue
  end

  def create
    venue = Venue.new(venue_params)
    if venue.save
      render json: venue
    else
      render json: { message: venue.errors }, status: 400
    end
  end

  private

  def set_venue
    @venue = Venue.find_by(id: params[:id])
  end

  def venue_params
    params.require(:venue).permit(:name, :city, :state, :description, :image)
  end
end
