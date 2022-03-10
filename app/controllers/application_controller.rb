class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  before_action :authorize

  private

  def render_response_not_found
    render json: { errors: "Not Found" }, status: :not_found
  end

  def render_invalid_response(exception)
    render json: { errors: [exception.record.errors.full_messages] }, status: :unprocessable_entity
  end

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end
end
