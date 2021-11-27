class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  validates :message_body, presence: :true
end
