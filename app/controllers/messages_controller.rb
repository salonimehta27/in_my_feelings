class MessagesController < ApplicationController
before_action :authorize
    def index 
        messages=Message.all
        render json: messages
    end


    def create 
        
        # user=User.find(session[:user_id])
        # message=user.messages.new(messages_params)
        # byebug
        message=Message.new(messages_params)
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
        # render json: message
        render json: message

    end

    # def create
    #     message=Message.new(messages_params)
    #     chatroom= Chatroom.find(params[:chatroom_id])
    #     # byebug
    #     # instantiate new serializer instances manually. because we are using websockets 
    #     # byebug
    #     # if message.save
    #     #     serialized_data=ActiveModelSerializers::Adapter::Json.new(
    #     #         MessageSerializer.new(message)
    #     #     ).serialized_json
    #     #     byebug
    #     #     ChatroomsChannel.broadcast_to chatroom, serialized_data
    #     #     head :ok
    #     # end
    #     # byebug
    #     if message.save
    #         puts "successfully saved message"
    #         # byebug
    #             ChatroomsChannel.broadcast_to(chatroom,{
    #             chatroom: chatroom,
    #             users: chatroom.users,
    #             messages:chatroom.messages
    #         })
    #     end
    #     render json: message

    # end

    def destroy 
        message=Message.find_by(id: params[:message_id])
        message.delete 
        head :no_content
    end

    private

    def messages_params
        params.require(:message).permit(:message_body,:user_id,:chatroom_id)
    end
end
