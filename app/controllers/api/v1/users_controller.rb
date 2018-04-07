class Api::V1::UsersController < ApplicationController
  include Concerns::Error

  def create
    if params[:user][:password] != params[:user][:password_confirm]
      render_bad_request 3, "These passwords do not match."
      return
    end
    @user = User.new user_params
    unless @user.save
      render_error @user.errors
      return
    end
    auto_login(@user)
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password)
    end
end
