class ChatroomsController < ApplicationController
 before_action :authorize
  
def index 
  current_user=User.find(session[:user_id])
  chatrooms=current_user.chatrooms.uniq
  render json: {
    chatrooms: chatrooms
  }
end

def create
  current_user=User.find(session[:user_id])
 @chatroom=current_user.chatrooms.new(chatroom_params)
 if @chatroom.save
  params[:users].each do|name|
    user=User.find_by(username: name)
    (@chatroom.users<<user) unless @chatroom.users.include?(current_user)
    end
    render json:{
      chatroom: @chatroom,
      users: @chatroom.users
    }
  end

end

def show
  # current_user=User.find(session[:user_id])
  # chatroom = current_user.chatrooms.find(params[:id])
  # render json: ChatroomSerializer.new(chatroom)
   chatroom = Chatroom.find(params[:id])
   render json: ChatroomSerializer.new(chatroom).serialized_json
end
 
#  def index 
#     chatrooms=Chatroom.all
#     render json: chatrooms
#   end
#   def show
#     chatroom=Chatroom.find(params[:id])
#     render json:ChatroomSerializer.new(chatroom), status: :ok
#   end

  # def create 
  #   chatroom=Chatroom.create(chatroom_params)
  #   if chatroom.save 
  #     serialized_data=ActiveModelSerializers::Adapter::Json.new(
  #       ChatroomSerializer.new(chatroom)
  #     ).serializable_hash
  #     ActionCable.server.broadcast 'chatrooms_channel', serialized_data
  #     head :ok
  #   else
  #     render json: {error:'Could not create the Chatroom'}, status: 422
  #   end
  #   # render json: chatroom, status: :created
  # end
 private
 def chatroom_params 
  params.permit(:room_name)
 end
end
