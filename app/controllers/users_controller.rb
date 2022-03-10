class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    users = User.all
    render json: UserSerializer.new(users).serialized_json
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: UserSerializer.new(user).serialized_json, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: UserSerializer.new(user).serialized_json, status: :created
  end

  private

  def user_params
    params.permit(:name, :username, :password, :password_confirmation, :has_agreed)
  end
end
