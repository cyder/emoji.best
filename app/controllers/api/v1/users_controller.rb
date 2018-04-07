class Api::V1::UsersController < ApplicationController
  def create
    @user = User.new user_params
    @user.save
    auto_login(@user)
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password)
    end
end
