## POST /api/v1/emojis
description

### Example

#### Request
```
POST /api/v1/emojis HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 2388:7ee1823426483412d7ae14a58d48664a
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

emoji[name]=name&emoji[description]=description&emoji[image]=http%3A%2F%2Fcyder.tech%2Fimages%2Ftwitter-white.png
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "emoji": {
    "id": 755,
    "name": "name",
    "description": "description",
    "number_of_downloaded": 0,
    "images": {
      "large_url": "/uploads/emoji/755/large/name.png",
      "thumb_url": "/uploads/emoji/755/thumb/name.png",
      "slack_url": "/uploads/emoji/755/slack/name.png"
    },
    "tags": [

    ],
    "user": {
      "id": 1897,
      "name": "name"
    }
  }
}
```

## GET /api/v1/emojis/:id
Returns a emoji.

### Example

#### Request
```
GET /api/v1/emojis/949 HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
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
    "id": 949,
    "name": "sample_emoji",
    "description": "sample",
    "number_of_downloaded": 0,
    "images": {
      "large_url": "/uploads/emoji/949/large/sample_emoji.png",
      "thumb_url": "/uploads/emoji/949/thumb/sample_emoji.png",
      "slack_url": "/uploads/emoji/949/slack/sample_emoji.png"
    },
    "tags": [

    ],
    "user": {
      "id": 1823,
      "name": "name"
    }
  }
}
```

## POST /api/v1/emojis/upload
Returns a url.

### Example

#### Request
```
POST /api/v1/emojis/upload HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 2392:ee20487712e97e6a21f5ccf144a7dd47
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Host: www.example.com

multipart/form-data
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "url": "/uploads/tmp/efe30aef-c866-4baa-a428-1100f7c9e868.png"
}
```
