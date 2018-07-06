class OauthsController < ApplicationController
  def oauth
    login_at(params[:provider])
  end

  def callback
    provider = params[:provider]
    @user = login_from(provider)
    unless @user
      @user = create_from(provider)
      auto_login(@user)
    end
    cookies[:access_token] = @user.activate.token
  end
end
