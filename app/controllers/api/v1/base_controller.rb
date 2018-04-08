class Api::V1::BaseController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_bad_request

  def render_bad_request(e)
    errors = e.record.errors.full_messages.map do |message|
      { code: select_error_code(message), message: message }
    end
    render template: "api/v1/errors/error", locals: { errors: errors }, status: :bad_request
  end

  private

    def select_error_code(message)
      case message
      when "Email has already been taken"
        1
      when "Password is too short (minimum is 6 characters)"
        2
      when "Password confirmation doesn't match Password"
        3
      else
        0
      end
    end
end
