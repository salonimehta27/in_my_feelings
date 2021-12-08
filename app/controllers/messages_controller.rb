class MessagesController < ApplicationController
before_action :authorize
    # def index 
    #     messages=Message.all
    #     render json: messages, include: :user, status: :ok
    # end


    def create 
        
        user=User.find(session[:user_id])
        message=user.messages.new(messages_params)
        # byebug
        if message.save 
            chatroom=message.chatroom
            ChatroomsChannel.broadcast_to(chatroom,{
                chatroom:chatroom,
                users:chatroom.users,
                messages:chatroom.messages
            })
        end
        render json: message
    end

    # def create
    #     message=Message.create(messages_params)
    #     chatroom= Chatroom.find(messages_params[:chatroom_id])
    #     # byebug
    #     # instantiate new serializer instances manually. because we are using websockets 
    #     # byebug
    #     # if message.save
    #     #     serialized_data=ActiveModelSerializers::Adapter::Json.new(
    #     #         MessageSerializer.new(message)
    #     #     ).serializable_hash
    #     #     byebug
    #     #     ChatroomsChannel.broadcast_to chatroom, serialized_data
    #     #     head :ok
    #     # end
    #     # byebug
    #     if message.save
    #         puts "successfully saved message"
    #         ChatroomsChannel.broadcast_to(chatroom,{
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
        params.permit(:message_body,:user_id,:chatroom_id)
    end
end
