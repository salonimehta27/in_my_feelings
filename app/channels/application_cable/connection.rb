
#For every WebSocket accepted by the server, a connection object is instantiated.
#sole job is to authenticate and authorize the current user
#Connections are instances of ApplicationCable::Connection, which extends ActionCable::Connection::Base.
# indentified_by(*indentifiers) 
# Mark a key as being the connection identifier index that can be used
# to find the specific connection again later.
# https://api.rubyonrails.org/v6.1.4/classes/ActionCable/Connection/Identification/ClassMethods.html#method-i-identified_by
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect 
      self.current_user=find_verified_user
    end
    
    private
   
    def find_verified_user
      # byebug
      if verified_user= User.find(cookies.encrypted['_session_id']['user_id'])
        verified_user
        # byebug
      else
        reject_unauthorized_connection
        #this is a instance public method which can also be written as 
        # reject_unathorized_connection() 
        # this method closes the websocket connection if it is open and
        # returns a 404 "File not found response"
        # https://api.rubyonrails.org/classes/ActionCable/Connection/Authorization.html#method-i-reject_unauthorized_connection
      end

    end
  end
end
