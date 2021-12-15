class MessagesController < ApplicationController
before_action :authorize
    def index 
        messages=Message.all
        render json: messages
    end

    def create 
        message=Message.new(messages_params)
        # byebug
        if message.save 
            # byebug
            chatroom=message.chatroom
           ChatroomsChannel.broadcast_to(chatroom,{
                chatroom:chatroom,
                users:chatroom.users,
                messages:chatroom.messages
            })
        end
        # byebug
        render json: message
    end

    def update
    message=Message.find(params[:id])
    message.update(messages_params)
    render json: message
    end

    def destroy 
        message=Message.find_by(id: params[:id])
        message.delete 
        head :no_content
    end

    private

    def messages_params
        params.require(:message).permit(:message_body,:user_id,:chatroom_id)
    end
end
