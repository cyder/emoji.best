## POST /api/v1/users
Returns a user.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Length: 108
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user1%40factory.com&user[name]=name&user[password]=password&user[password_confirmation]=password
```

#### Response
```
HTTP/1.1 200
Cache-Control: max-age=0, private, must-revalidate
Content-Length: 61
Content-Type: application/json; charset=utf-8
ETag: W/"4bc792fb0967d108bc76582aaadc0fda"
Set-Cookie: _emojix_session=Ym9xVisvL3c0S0NENy9HMkozV0hNVFdtcVVYRUpNdjVLMHptNTFzaDh0elhTMG94R1llRkxnZ2tub2FBMEw2WDlyek9JSWZNOU15OWh5eHl3Wi83VnBtcVhKRzIrZG1tV1FtTlRpOWlQY1U9LS1iV1VGTHg3QjdvdzE5ZjhlVTFlcWZnPT0%3D--2d771056c5f777cc060d4832c5ecaf0ad933faad; path=/; HttpOnly
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Request-Id: 5cf7ce9e-c6fe-4ba6-9656-33b2901286b9
X-Runtime: 0.183367
X-XSS-Protection: 1; mode=block

{
  "user": {
    "id": 182,
    "name": "name",
    "email": "user1@factory.com"
  }
}
```

## POST /api/v1/users
Returns a invalid email error.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Length: 102
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=invalid_email&user[name]=name&user[password]=password&user[password_confirmation]=password
```

#### Response
```
HTTP/1.1 400
Cache-Control: no-cache
Content-Length: 66
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Request-Id: 81a29ac4-0169-42bd-acb5-e78aa32bd18b
X-Runtime: 0.076120
X-XSS-Protection: 1; mode=block

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
Content-Length: 108
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user4%40factory.com&user[name]=name&user[password]=password&user[password_confirmation]=password
```

#### Response
```
HTTP/1.1 400
Cache-Control: no-cache
Content-Length: 68
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Request-Id: 2432e8ec-c8ad-452c-96e6-39cad0779460
X-Runtime: 0.062782
X-XSS-Protection: 1; mode=block

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
Content-Length: 100
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user5%40factory.com&user[name]=name&user[password]=easy&user[password_confirmation]=easy
```

#### Response
```
HTTP/1.1 400
Cache-Control: no-cache
Content-Length: 57
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Request-Id: 50c20b53-949e-4043-a982-cd0613f9ce1a
X-Runtime: 0.068280
X-XSS-Protection: 1; mode=block

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
Content-Length: 116
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user6%40factory.com&user[name]=name&user[password]=password&user[password_confirmation]=invalid_password
```

#### Response
```
HTTP/1.1 400
Cache-Control: no-cache
Content-Length: 86
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Request-Id: bf2d6346-04d4-4fdf-87e9-dcfcae1466ac
X-Runtime: 0.068601
X-XSS-Protection: 1; mode=block

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
