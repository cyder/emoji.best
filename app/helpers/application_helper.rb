module ApplicationHelper
  def default_meta_tags
    {
      site: "emoji.best",
      charset: "utf-8",
      description: "This is posting site of emoji for slack. Let's share emojis!!",
      keywords: "emoji best cyder slack",
      canonical: request.base_url,
      icon: [
        { href: image_url("favicon.png") },
      ],
      og: og_meta_tags,
      twitter: twitter_meta_tags,
      fb: fb_meta_tags,
    }
  end

  private

    def og_meta_tags
      {
        site_name: "emoji.best",
        title: "emoji.best",
        description: "This is posting site of emoji for slack. Let's share emojis!!",
        type: "website",
        url: request.base_url,
        image: image_url("ogp.png"),
      }
    end

    def twitter_meta_tags
      {
        card: "summary_large_image",
        site: "@Cyder_PR",
      }
    end

    def fb_meta_tags
      {
        app_id: "150795858797745",
      }
    end
end
