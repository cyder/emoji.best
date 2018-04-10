class Api::V1::BaseController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_bad_request

  def render_bad_request(e)
    errors = e.record.errors.details
    render template: "api/v1/errors/error", locals: { errors: errors }, status: :bad_request
  end
end
