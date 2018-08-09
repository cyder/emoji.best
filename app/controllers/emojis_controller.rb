class EmojisController < ApplicationController
  def show
    set_meta_tags canonical: request.base_url + request.path
    emoji = Emoji.find_by(id: params[:id])

    if emoji.present?
      set_meta_tags emoji
      render template: "app/index"
    else
      set_meta_tags title: "not found"
      render template: "app/index", status: 404
    end
  end
end
