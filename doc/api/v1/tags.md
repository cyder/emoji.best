## POST /api/v1/emojis/:emoji_id/tags
Returns a tag.

### Example

#### Request
```
POST /api/v1/emojis/757/tags HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 1381:a8622855d48eeba21c5c541d51f360a6
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

tag[name]=tag_name
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "tag": {
    "id": 175,
    "name": "tag_name",
    "user_id": 1381,
    "emoji": {
      "id": 757,
      "name": "sample_emoji",
      "description": "sample",
      "number_of_downloaded": 0,
      "images": {
        "large_url": "/uploads/emoji/757/large/sample_emoji.png",
        "thumb_url": "/uploads/emoji/757/thumb/sample_emoji.png",
        "slack_url": "/uploads/emoji/757/slack/sample_emoji.png"
      },
      "tags": [
        {
          "id": 175,
          "name": "tag_name"
        }
      ],
      "user": {
        "id": 1380,
        "name": "name"
      }
    }
  }
}
```

## DELETE /api/v1/emojis/:emoji_id/tags/:id
Returns a emoij.

### Example

#### Request
```
DELETE /api/v1/emojis/761/tags/177 HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 1390:68c9b0dfcee33903f29f16537dab7f76
Content-Type: application/x-www-form-urlencoded
Host: www.example.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "emoji": {
    "id": 761,
    "name": "sample_emoji",
    "description": "sample",
    "number_of_downloaded": 0,
    "images": {
      "large_url": "/uploads/emoji/761/large/sample_emoji.png",
      "thumb_url": "/uploads/emoji/761/thumb/sample_emoji.png",
      "slack_url": "/uploads/emoji/761/slack/sample_emoji.png"
    },
    "tags": [

    ],
    "user": {
      "id": 1388,
      "name": "name"
    }
  }
}
```
