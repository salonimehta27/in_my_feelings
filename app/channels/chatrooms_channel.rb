class ChatroomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # @chatroom=Chatroom.find(params[:id])
    # stop_all_streams
    @chatroom = Chatroom.find(params[:room])
    stream_for @chatroom
  end

  def received data
    byebug
   ChatroomsChannel.broadcast_to(@chatroom,{chatroom:@chatroom, users: @chatroom.users, messages:@chatroom.messages})
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # stop_all_streams
  end
end
