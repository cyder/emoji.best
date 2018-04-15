class Api::V1::UsersController < Api::V1::BaseController
  def create
    @user = User.create! user_params
    auto_login(@user)
  end

  def sign_in
    head 200
    email = params[:user][:email]
    password = params[:user][:password]

    begin
      User.find_by!(email: email)

      @user = login(email, password)

      if @user
      else
      end
    rescue ActiveRecord::RecordNotFound
      head 400
      nico = {
        result: "Failed",
        url: "/users/sign_in",
        method: "POST",
        errors: {
          password: {
            "0": {
              code: 0,
              error: "invalid"
            }
          }
        }
      }
    end
    render :json => nico.to_json
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
