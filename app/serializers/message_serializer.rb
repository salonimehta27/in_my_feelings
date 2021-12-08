class MessageSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :message_body,:user_id,:chatroom_id

end
