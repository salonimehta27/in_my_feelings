class ChatroomsController < ApplicationController
  before_action :authorize

  def index
    current_user = User.find(session[:user_id])
    chatrooms = current_user.chatrooms.uniq
    render json: {
             chatrooms: chatrooms,
           }
  end

  def show
    chatroom = Chatroom.find(params[:id])
    render json: ChatroomSerializer.new(chatroom).serialized_json
  end

  private

  def chatroom_params
    params.permit(:room_name)
  end
end
