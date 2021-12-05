class ChatroomsController < ApplicationController
 skip_before_action :authorize, only:[:index]
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
    if chatroom.save 
      serialized_data=ActiveModelSerializers::Adapter::Json.new(
        ChatroomSerializer.new(chatroom)
      ).serializable_hash
      ActionCable.server.broadcast 'chatrooms_channel', serialized_data
      head :ok
    else
      render json: {error:'Could not create the Chatroom'}, status: 422
    end
    # render json: chatroom, status: :created
  end


 private

 def chatroom_params 
  params.permit(:room_name,:chatroom_id)
 end
end
