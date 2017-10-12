class Api::ConcertsController < ApplicationController

  before_action :set_concert, only: [:show, :update, :destroy]

  def index
    render json: Concert.all
  end

  def create
    concert = Concert.new(concert_params)
    if concert.save
      render json: concert
    else
      render json: { message: concert.errors, status: 400 }
    end
  end

  def show
    render json: @concert
  end

  def update
    if @concert.update(concert_params)
      render json: @concert
    else
      render json: { message: concert.errors, status: 400}
    end
  end

  def destroy
    if @concert.destroy
      render json: {message: "Concert destroyed"}, status: 204
    else
      render json: {message: "Unable to destroy concert"}, status: 400
    end
  end

  private

  def set_concert
    @concert = Concert.find_by(id: params[:id])
  end

  def concert_params
    params.require(:concert).params(:artist, :genre, :date, :venue_id)
  end

end
