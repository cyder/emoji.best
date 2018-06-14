class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: [:create, :show]

  def create
    @user = User.create! user_params
    @access_token = @user.activate.token
    auto_login(@user)
  end

  def show
    @user = User.find(params[:id])
  end

  def profile
    @user = current_user
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
