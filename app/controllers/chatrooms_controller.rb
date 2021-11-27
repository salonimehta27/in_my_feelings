class ChatroomsController < ApplicationController
#  before_action :authorize
  def index 
    chatrooms=Chatroom.all
    render json: chatrooms
  end
  def show
    chatroom=Chatroom.find(params[:id])
    render json: chatroom, status: :ok
  end

  def create 
    chatroom=Chatroom.create(chatroom_params)
    render json: chatroom, status: :created
  end


 private

 def chatroom_params 
  params.permit(:room_name)
 end
end
