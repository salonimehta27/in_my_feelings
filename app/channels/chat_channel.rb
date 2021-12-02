class ChatChannel < ApplicationCable::Channel
  #Consumers subscribe to channels, acting as subscribers. Their connection is called a subscription.
  # Produced messages are then routed to these channel subscriptions based on an identifier sent by the channel consumer.
  
  def subscribed
#stop_all_streams() public
# Unsubscribes all streams associated with this channel from the pubsub queue.
   stop_all_streams
   @chatroom= Chatroom.find(params[:id])
   stream_for @chatroom
  end

  def receive data
    user= User.find_by(id: data['userId'])
    message=@chatroom.messages.create(message_body: data['content'],user:user)
    ChatChannel.broadcast_to(@chatroom, MessageSerializer.new(message).serialized_json)
  end
  def unsubscribed
    stop_all_streams
  end
end
