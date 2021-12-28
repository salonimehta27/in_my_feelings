class MoodsController < ApplicationController
 skip_before_action :authorize
 def index 
  moods=Mood.all
  respond_to do |format|
    format.html
    format.json
  end
 end

 def show
  mood=Mood.find(params[:id])
  render json: mood, status: :ok
 end
end
