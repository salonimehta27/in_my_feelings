class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :room_name
  has_many :messages
end
