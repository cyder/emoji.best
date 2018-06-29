class Api::V1::BaseController < ApplicationController
  before_action :require_valid_token
  protect_from_forgery with: :null_session

  rescue_from ActiveRecord::RecordInvalid do |e|
    errors = e.record.errors.details
    render template: "api/v1/errors/error", locals: { errors: errors }, status: :bad_request
  end

  rescue_from ActiveRecord::RecordNotFound do |e|
    error = e.to_s
    render template: "api/v1/errors/not_found", locals: { error: error }, status: :not_found
  end

  rescue_from ActionController::ParameterMissing do |e|
    error = e.to_s
    render template: "api/v1/errors/param", locals: { error: error }, status: :bad_request
  end

  def require_valid_token
    token = request.headers[:Authorization]
    access_token = AccessToken.find_by(token: token)
    if access_token.nil?
      render template: "api/v1/errors/forbidden", status: :forbidden
      return
    end
    access_token.update_expiration
    auto_login(access_token.user)
  end
end
