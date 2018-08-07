class EmojisController < ApplicationController
  def show
    emoji = Emoji.find(params[:id])
    tags_name = emoji.tags.map(&:name)
    tags_description = tags_name.present? ? "(tags: #{tags_name.join(", ")})" : ""
    description = "Detail of \"#{emoji.name}\" custom Emoji. #{emoji.description} #{tags_description}"

    @page_title = emoji.name
    @page_description = description
    @page_keywords = tags_name.join(", ")
    set_meta_tags canonical: request.base_url + request.path
    set_meta_tags og: { image: emoji.image.ogp }
    set_meta_tags twitter: { card: "summary" }

    render template: "app/index"
  end
end
