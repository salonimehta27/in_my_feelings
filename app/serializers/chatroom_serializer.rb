class ChatroomSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :room_name,:users,:messages
  attributes :users do |chatroom|
    chatroom.users.uniq
  end
end
