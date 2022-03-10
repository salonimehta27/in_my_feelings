class ChatroomsChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    chatroom = Chatroom.find(params[:room])
    stream_for chatroom
  end

  def received(data)
    ChatroomsChannel.broadcast_to(chatroom, { chatroom: chatroom, users: chatroom.users, messages: chatroom.messages })
  end

  def unsubscribed
    stop_all_streams
  end
end
