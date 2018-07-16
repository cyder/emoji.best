module ApplicationHelper
  def default_meta_tags
    {
      site: "emoji.best",
      charset: "utf-8",
      description: "This is posting site of emoji for slack. Let's share emojis!!",
      keywords: "emoji best cyder slack",
      canonical: request.original_url,
      icon: [
        { href: image_url("favicon.png") },
      ],
      og: {
        site_name: "emoji.best",
        description: "This is posting site of emoji for slack. Let's share emojis!!",
        type: "website",
        url: request.original_url,
        image: image_url("ogp.png"),
      },
      twitter: {
        card: "summarylargeimage",
        site: "@Cyder_PR",
      },
      fb: {
        app_id: "150795858797745",
      },
    }
  end
end
