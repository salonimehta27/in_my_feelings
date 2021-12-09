class ChatroomSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :room_name,:users, :messages
  attribute :users do |chatroom|
   UserSerializer.new(chatroom.users.uniq).serializable_hash
  end
end
