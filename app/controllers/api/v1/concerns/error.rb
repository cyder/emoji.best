module Api::V1::Concerns
  module Error
    extend ActiveSupport::Concern

    def render_error(errors)
      if errors.messages[:email].include?("has already been taken")
        render_bad_request 1, "This email address has used."
        return
      end
      if errors.messages[:password].include?("is too short (minimum is 6 characters)")
        render_bad_request 2, "This password is too easy."
        return
      end
      render_bad_request
    end

    def render_bad_request(code = 0, message = "Bad parameter.")
      render template: "api/v1/errors/error", locals: { code: code, message: message }, status: :bad_request
    end
  end
end
