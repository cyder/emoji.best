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

## PUT /api/v1/users
Returns a user.

### Example

#### Request
```
PUT /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 370:ffb5ad4e2f978b8f2edffdd4b7740690
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=changed%40email.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "user": {
    "id": 370,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "changed@email.com",
    "number_of_downloaded": 0
  },
  "access_token": null
}
```

## PUT /api/v1/users
Returns a user.

### Example

#### Request
```
PUT /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 371:28abda8d816a48ac0ee1ef9f6801913a
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[password]=new+password&user[password_confirmation]=new+password
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "user": {
    "id": 371,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "user2@factory.com",
    "number_of_downloaded": 0
  },
  "access_token": null
}
```

## DELETE /api/v1/users
Returns 200.

### Example

#### Request
```
DELETE /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 374:1d322820d9ca8655c18334734769fd1a
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

## GET /api/v1/users/:id
Return my profile.

### Example

#### Request
```
GET /api/v1/users/1164 HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 1164:334c6dc94f117abf0731e2b2b9376a22
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
    "id": 1164,
    "name": "name",
    "number_of_uploaded": 1,
    "upload_emojis": [
      {
        "id": 490,
        "name": "sample_emoji",
        "description": "sample",
        "number_of_downloaded": 0,
        "images": {
          "large_url": "/uploads/emoji/490/large/sample_emoji.png",
          "thumb_url": "/uploads/emoji/490/thumb/sample_emoji.png",
          "slack_url": "/uploads/emoji/490/slack/sample_emoji.png"
        },
        "tags": [

        ],
        "user": {
          "id": 1164,
          "name": "name"
        }
      }
    ],
    "email": "user3@factory.com",
    "number_of_downloaded": 0
  }
}
```
