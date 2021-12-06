class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :room_name
  has_many :messages
  has_many :users, through: :messages
end
