## POST /api/v1/emojis
description

### Example

#### Request
```
POST /api/v1/emojis HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 1897:dd0edca6e00379cea835d8b817e882cc
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
