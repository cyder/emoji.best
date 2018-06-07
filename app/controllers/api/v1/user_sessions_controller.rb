class Api::V1::UserSessionsController < Api::V1::BaseController
  skip_before_action :require_valid_token, only: :create

  def create
    email = params[:user][:email]
    password = params[:user][:password]

    User.find_by!(email: email)

    if @user = login(email, password)
      @access_token = @user.activate.token
    else
      render template: "api/v1/errors/incorrect", status: :bad_request
    end
  end

  def destroy
  end
end
