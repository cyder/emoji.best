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

## PATCH /api/v1/emojis/:id
changed_description

### Example

#### Request
```
PATCH /api/v1/emojis/1365 HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 2607:6c56e5d08d52628c6bb8755e4adb3d6a
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

emoji[name]=changed_name&emoji[description]=changed_description
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "emoji": {
    "id": 1365,
    "name": "changed_name",
    "description": "changed_description",
    "number_of_downloaded": 0,
    "images": {
      "large_url": "/uploads/emoji/1365/large/sample_emoji.png",
      "thumb_url": "/uploads/emoji/1365/thumb/sample_emoji.png",
      "slack_url": "/uploads/emoji/1365/slack/sample_emoji.png"
    },
    "tags": [

    ],
    "user": {
      "id": 2607,
      "name": "name"
    }
  }
}
```

## DELETE /api/v1/emojis/:id
Returns a 200.

### Example

#### Request
```
DELETE /api/v1/emojis/1369 HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 2613:e98f071d2133289fdf1d949bfbd66212
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
}
```
