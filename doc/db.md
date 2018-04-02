# DB設計
\* がついてるのはオプション
## User
* id
* name
* password(hashed)
* create_at
* update_at

## Emoji
* id
* name
* description *
* original_image
  * original size
  * emoji/[user_id]/original/[emoji_name]
* large_image
  * 512px * 512px(仮)
  * emoji/[user_id]/large/[emoji_name]
* thumbnail_image
  * 256px * 256px(仮)
  * emoji/[user_id]/thumbnail/[emoji_name]
* slack_image
  * 128px * 128px
  * emoji/[user_id]/slack/[emoji_name]
* user
* create_at
* update_at

## DownloadLog
* id
* emoji
* user *
* create_at
* update_at

## Tag
* id
* name
* emoji
* user
* create_at
* update_at
