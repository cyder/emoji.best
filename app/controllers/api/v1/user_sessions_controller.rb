class Api::V1::UserSessionsController < Api::V1::BaseController
  def create
    email = params[:user][:email]
    password = params[:user][:password]

    User.find_by!(email: email)

    @user = login(email, password)

    render template: "api/v1/user_sessions/incorrect", status: :bad_request unless @user
  end

  def destroy
  end
end
