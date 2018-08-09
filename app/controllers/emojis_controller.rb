class EmojisController < ApplicationController
  def show
    set_meta_tags canonical: request.base_url + request.path
    emoji = Emoji.find_by(id: params[:id])

    if emoji.present?
      set_meta_tags emoji
    else
      set_meta_tags title: "not found"
    end

    render template: "app/index"
  end
end
