class Api::V1::BaseController < ApplicationController
  before_action :require_valid_token

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
    access_token = request.headers[:Authorization]
    user = User.find_from_access_token(access_token).first
    if access_token.blank? || user.blank?
      render template: "api/v1/errors/forbidden", status: :forbidden
      return
    end
    auto_login(user)
  end
end
