class Api::V1::UserSessionsController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: :create

  def create
    email = login_params[:email]
    password = login_params[:password]

    User.find_by!(email: email)
    if @user = login(email, password)
      @access_token = @user.activate.token
    else
      render template: "api/v1/errors/incorrect", status: :bad_request
    end
  end

  def destroy
  end

  private

    def login_params
      params.require(:user).permit(:email, :password)
    end
end
