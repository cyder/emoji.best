class EmojisController < ApplicationController
  def show
    emoji = Emoji.find_by(id: params[:id])
    if emoji.present?
      change_meta_tags(emoji)
    else
      @page_title = "not found"
    end

    render template: "app/index"
  end

  private

    def change_meta_tags(emoji)
      tags_name = emoji.tags.pluck(:name)
      tags_description = tags_name.empty? ? "" : "(tags: #{tags_name.join(", ")})"
      description = "Detail of \"#{emoji.name}\" custom Emoji. #{emoji.description} #{tags_description}"

      set_meta_tags title: emoji.name,
                    description: description,
                    keywords: tags_name.join(", "),
                    canonical: request.base_url + request.path,
                    og: { image: emoji.image.ogp },
                    twitter: { card: "summary" }
    end
end
