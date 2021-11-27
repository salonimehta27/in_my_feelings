class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found 
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
before_action :authorize


private 

def render_response_not_found
  render json: {error:"Not Found"}, status: :not_found
end

def render_invalid_response exception
  render json: {errors:[exception.record.errors.full_messages] }, status: :unprocessable_entity
end

def authorize
  # @current_user=User.find_by(id:session[:user_id])
  render json: {errors:["Not authorized"]}, status: :unauthorized unless session.include? :user_id

end


end
