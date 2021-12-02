class User < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :chatrooms, through: :messages
# add validation for name has to be present
    validates :name, presence: :true
    validates :username, presence: :true
    validates_uniqueness_of :username
    has_secure_password
    validates :has_agreed, presence: :true

    scope :all_except, ->(user) {where.not(id: user)}
end
 