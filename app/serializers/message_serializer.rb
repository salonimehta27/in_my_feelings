class MessageSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :message_body,:created_at
  belongs_to :user
  belongs_to :chatroom
end
