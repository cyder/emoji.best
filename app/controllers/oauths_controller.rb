class OauthsController < ApplicationController
  def oauth
    login_at(params[:provider])
  end

  def callback
    provider = params[:provider]
    @user = login_from(provider)
    if @user
      redirect_to root_path
    else
      @user = create_from(provider)

      auto_login(@user)
      redirect_to root_path
    end
  end
end
