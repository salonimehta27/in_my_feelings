
#For every WebSocket accepted by the server, a connection object is instantiated.
#sole job is to authenticate and authorize the current user
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    #anything after this line is my own code in this prewritten code
    #Connections are instances of ApplicationCable::Connection, which extends ActionCable::Connection::Base.
  # rescue_from StandardError, with: :report_error
  # indentified_by(*indentifiers) 
  # Mark a key as being the connection identifier index that can be used
  # to finf the specific connection again later.
  # https://api.rubyonrails.org/v6.1.4/classes/ActionCable/Connection/Identification/ClassMethods.html#method-i-identified_by
    identified_by :current_user

    def connect 
      self.current_user=find_verified_user
    end


    private
    # what is cookies.encrypted? # where did the reject_unauthorized_connection come from
    def find_verified_user
      if verified_user= User.find_by(id: cookies.encrypted[sessions[:user_id]])
        verified_user
      else
        reject_unauthorized_connection
        #this is a instance public method which can also be written as 
        # reject_unathorized_connection() 
        # this method closes the websocket connection if it is open and
        # returns a 404 "File not found response"
        # https://api.rubyonrails.org/classes/ActionCable/Connection/Authorization.html#method-i-reject_unauthorized_connection
      end

    end
    # this code is questionable
    # No code or such method found on the rails app 
    # so this might will just get deleted along with the rescue_from in this file

    # def report_error e
    #   SomeExternalBugtrackingService.notify(e)
    # end
  end
end
