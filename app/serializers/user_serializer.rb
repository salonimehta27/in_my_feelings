class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :username,:messages
  # has_many :messages
  # has_many :chatrooms, through: :messages
  attributes :chatrooms do |user|
    user.chatrooms.uniq
  end
  
end
