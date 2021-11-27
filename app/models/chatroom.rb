class Chatroom < ApplicationRecord
    has_many :messages
    has_many :users, through: :messages

    validates :room_name, presence: :true
end
