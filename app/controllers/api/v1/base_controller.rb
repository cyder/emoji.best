class Api::V1::BaseController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid do |e|
    errors = e.record.errors.details
    render template: "api/v1/errors/error", locals: { errors: errors }, status: :bad_request
  end

  rescue_from ActiveRecord::RecordNotFound do
    render template: "api/v1/errors/email", status: :bad_request
  end

  rescue_from NoMethodError do
    render template: "api/v1/errors/param", status: :bad_request
  end
end
