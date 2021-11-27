class MessagesController < ApplicationController

    def index 
        messages=Message.all
        render json: messages, include: :user, status: :ok

    end

    def destroy 
        message=Message.find_by(id: params[:message_id])
        message.delete 
        head :no_content
    end
end
