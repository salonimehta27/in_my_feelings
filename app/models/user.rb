class User < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :chatrooms, through: :messages
    validates :name, :username,:has_agreed, presence: :true
    validates_uniqueness_of :username
    has_secure_password

end
 