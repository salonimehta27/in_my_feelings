class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stop_all_streams
    chatroom=Chatroom.find(params[:chatroom])
    stream_for chatroom
  end
  # def received data
  #   user = User.find_by(id: data['user_id'])
  #   @chatroom=Chatroom.find(params[:chatroom_id])
  #   message = @chatroom.messages.create(message_body: data['message_body'], user_id:data['user_id'],chatroom_id:['chatroom.id'])
  #   MessagesChannel.broadcast_to(@chatroom, MessageSerializer.new(message).serialized_json)

  # end
  def unsubscribed
    # stop_all_streams
    # Any cleanup needed when channel is unsubscribed
  end
end
