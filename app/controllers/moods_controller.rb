class MoodsController < ApplicationController
  skip_before_action :authorize

  def index
    moods = Mood.all
    render json: moods
  end

  def show
    mood = Mood.find(params[:id])
    render json: mood, status: :ok
  end
end
