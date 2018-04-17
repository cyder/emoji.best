class Api::V1::UsersController < Api::V1::BaseController
  def create
    @user = User.create! user_params
    auto_login(@user)
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
