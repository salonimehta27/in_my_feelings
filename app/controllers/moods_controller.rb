class MoodsController < ApplicationController
    skip_before_action :authorize
    def index 
        moods=Mood.all
        render json: moods
    end
end
