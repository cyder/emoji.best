## GET /api/v1/users/check
Return return a user.

### Example

#### Request
```
GET /api/v1/users/check HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 375:0a482fef9074e6f86b1ac3d668441f26
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
    "id": 375,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "user1@factory.com",
    "number_of_downloaded": 0
  }
}
```

## POST /api/v1/users/sign_in
Should be able to sign in.

### Example

#### Request
```
POST /api/v1/users/sign_in HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user1%40factory.com&user[password]=password
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "user": {
    "id": 915,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "user1@factory.com",
    "number_of_downloaded": 0
  },
  "access_token": "915:b92d239f92c2ae03bac1f2b676208065"
}
```

## DELETE /api/v1/users/sign_out
Should be able to sign out.

### Example

#### Request
```
DELETE /api/v1/users/sign_out HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 919:1a70b9a8fd72782c7c1c25bf1dd50c9f
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
  "user": {
    "id": 919,
    "name": "name",
    "number_of_uploaded": 0,
    "upload_emojis": [

    ],
    "email": "user1@factory.com",
    "number_of_downloaded": 0
  }
}
```
