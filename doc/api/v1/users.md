## POST /api/v1/users
Returns a user.

### Example

#### Request
```
POST /api/v1/users HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user1%40factory.com&user[name]=name&user[password]=password&user[password_confirmation]=password
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "user": {
    "id": 198,
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
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=invalid_email&user[name]=name&user[password]=password&user[password_confirmation]=password
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
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user4%40factory.com&user[name]=name&user[password]=password&user[password_confirmation]=password
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
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user5%40factory.com&user[name]=name&user[password]=easy&user[password_confirmation]=easy
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
Content-Type: application/x-www-form-urlencoded
Host: www.example.com

user[email]=user6%40factory.com&user[name]=name&user[password]=password&user[password_confirmation]=invalid_password
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
