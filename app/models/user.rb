class User < ApplicationRecord
   
    scope :all_except, ->(user) {where.not(id: user)}
    has_many :messages, dependent: :destroy
    has_many :chatrooms, through: :messages
    validates :name, presence: :true
    validates :username, presence: :true
    validates_uniqueness_of :username
    validates :has_agreed, presence: :true
    has_secure_password
end
 