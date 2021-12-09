class Chatroom < ApplicationRecord
    scope :public_rooms, -> {where(is_private: false)}
    has_many :messages, dependent: :destroy
    has_many :users, through: :messages
    validates :room_name, presence: :true
    validates_uniqueness_of :room_name 
    
end
