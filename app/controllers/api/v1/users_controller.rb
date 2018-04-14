class Api::V1::UsersController < Api::V1::BaseController
  def create
    @user = User.create! user_params
    auto_login(@user)
  end

  def sign_in
    @user = login(params[:user][:email], params[:user][:password])

    if @user
      api_key = @user.activate
      @access_token = api_key.access_token
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
