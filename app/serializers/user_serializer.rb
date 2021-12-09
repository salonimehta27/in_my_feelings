class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :username
  attribute :chatrooms do |user|
    user.chatrooms.uniq
  end
  
end
