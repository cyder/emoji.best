class AppController < ApplicationController
  def index
  end

  def signin
    @page_title = "Sign In"
    render action: :index
  end

  def signup
    @page_title = "Sign Up"
    render action: :index
  end

  def upload
    @page_title = "Upload"
    render action: :index
  end
end
