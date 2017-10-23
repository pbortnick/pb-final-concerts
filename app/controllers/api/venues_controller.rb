class Api::VenuesController < ApplicationController
  before_action :set_venue, only: [:show]

  def index
    render json: Venue.all
  end

  def show
    render json: @venue
  end

  private

  def set_venue
    @venue = Venue.find_by(id: params[:id])
  end

  def venue_params
    params.require(:venue).permit(:name, :city, :state, :description, :image)
  end
end
