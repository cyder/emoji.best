class Api::ErrorController < ApplicationController
  def render_404
    render template: "api/v1/errors/not_found", locals: { error: "page not found" }, status: :not_found
  end
end
