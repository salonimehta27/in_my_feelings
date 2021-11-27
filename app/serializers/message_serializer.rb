class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message_body
  has_one :user
  has_one :chatroom
end
