class OauthsController < ApplicationController
  def oauth
    login_at(params[:provider])
  end

  def callback
    provider = params[:provider]

    # ログイン時にsessionがresetされるため、一旦保存する
    old_session = session.dup.to_hash

    @user = login_from(provider)
    unless @user
      @user = create_from(provider)
      auto_login(@user)
    end

    # 保存したsessionをもとに戻す
    old_session.each_pair do |k, v|
      session[k.to_sym] = v
    end

    # 作成したaccess_tokenはcookiesでブラウザに渡す
    cookies[:access_token] = @user.activate.token
  end
end
