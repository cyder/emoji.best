## POST /api/v1/users
Returns a user.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/json
Host: www.example.com

{
  "user": {
    "email": "user1@factory.com",
    "name": "name",
    "password": "password",
    "password_confirmation": "password"
  }
}
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "user": {
    "id": 923,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "user1@factory.com",
    "number_of_downloaded": 0
  },
  "access_token": "923:054ff3d04c2f70f48752d28182d7dd9c"
}
```

## POST /api/v1/users
Returns a invalid email error.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/json
Host: www.example.com

{
  "user": {
    "email": "invalid_email",
    "name": "name",
    "password": "password",
    "password_confirmation": "password"
  }
}
```

#### Response
```
HTTP/1.1 400
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "errors": {
    "email": [
      {
        "error": "invalid",
        "value": "invalid_email"
      }
    ]
  }
}
```

## POST /api/v1/users
Returns a token email error.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/json
Host: www.example.com

{
  "user": {
    "email": "user4@factory.com",
    "name": "name",
    "password": "password",
    "password_confirmation": "password"
  }
}
```

#### Response
```
HTTP/1.1 400
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "errors": {
    "email": [
      {
        "error": "taken",
        "value": "user4@factory.com"
      }
    ]
  }
}
```

## POST /api/v1/users
Returns a too_short password error.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/json
Host: www.example.com

{
  "user": {
    "email": "user5@factory.com",
    "name": "name",
    "password": "easy",
    "password_confirmation": "easy"
  }
}
```

#### Response
```
HTTP/1.1 400
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "errors": {
    "password": [
      {
        "error": "too_short",
        "count": 6
      }
    ]
  }
}
```

## POST /api/v1/users
Returns a confirmation password error.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/json
Host: www.example.com

{
  "user": {
    "email": "user6@factory.com",
    "name": "name",
    "password": "password",
    "password_confirmation": "invalid_password"
  }
}
```

#### Response
```
HTTP/1.1 400
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "errors": {
    "password_confirmation": [
      {
        "error": "confirmation",
        "attribute": "Password"
      }
    ]
  }
}
```

## GET /api/v1/users/:id
Return a user profile.

### Example

#### Request
```
GET /api/v1/users/927 HTTP/1.1
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
  "user": {
    "id": 927,
    "name": "name",
    "number_of_uploaded": 1,
    "upload_emojis": [
      {
        "id": 372,
        "name": "sample_emoji",
        "description": "sample",
        "number_of_downloaded": 0,
        "images": {
          "large_url": "/uploads/emoji/372/large/sample_emoji.png",
          "thumb_url": "/uploads/emoji/372/thumb/sample_emoji.png",
          "slack_url": "/uploads/emoji/372/slack/sample_emoji.png"
        },
        "tags": [

        ],
        "user": {
          "id": 927,
          "name": "name"
        }
      }
    ]
  }
}
```

## GET /api/v1/users/profile
Return my profile.

### Example

#### Request
```
GET /api/v1/users/profile HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 930:afdf71fb1c9b17f184ac1b331f1bf294
Host: www.example.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "user": {
    "id": 930,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "user1@factory.com",
    "number_of_downloaded": 0
  }
}
```
