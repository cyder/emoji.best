class Api::V1::UserSessionsController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: [:create]

  def authentication
    @user = current_user
  end

  def create
    email = login_params[:email]
    password = login_params[:password]

    User.find_by!(email: email)
    @user = login(email, password)
    unless @user
      render template: "api/v1/errors/incorrect", status: :bad_request
      return
    end
    @access_token = @user.activate.token
  end

  def destroy
    token = request.headers[:Authorization]
    AccessToken.find_by(token: token).destroy
    @user = current_user
  end

  private

    def login_params
      params.require(:user).permit(:email, :password)
    end
end
