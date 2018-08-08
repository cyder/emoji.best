class AppController < ApplicationController
  def index
  end

  def signin
    set_meta_tags title: "Sign In"
    render :index
  end

  def signup
    set_meta_tags title: "Sign Up"
    render :index
  end

  def upload
    set_meta_tags title: "Upload"
    render :index
  end
end
