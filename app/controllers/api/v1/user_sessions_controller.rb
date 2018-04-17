class Api::V1::UserSessionsController < Api::V1::BaseController
  def create
    email = params[:user][:email]
    password = params[:user][:password]

    User.find_by!(email: email)

    @user = login(email, password)

    unless @user
      errors = {
        password: [{
          error: "incorrect"
        }]
      }
      render template: "api/v1/errors/error", locals: { errors: errors }, status: :bad_request
    end
  end

  def destroy
  end
end
