class ChatChannel < ApplicationCable::Channel
  #Consumers subscribe to channels, acting as subscribers. Their connection is called a subscription.
  # Produced messages are then routed to these channel subscriptions based on an identifier sent by the channel consumer.
  
  def subscribed
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
