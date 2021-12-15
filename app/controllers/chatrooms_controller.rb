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
   chatroom = Chatroom.find(params[:id])
   render json: ChatroomSerializer.new(chatroom).serialized_json
end
 
 private
 def chatroom_params 
  params.permit(:room_name)
 end
end
