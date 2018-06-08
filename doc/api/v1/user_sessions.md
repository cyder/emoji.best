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
    "id": 16,
    "name": "name",
    "email": "user1@factory.com"
  },
  "access_token": "1021:c91fb3af72a45152fe6b36eed57b5e6f"
```

## DELETE /api/v1/users/sign_out
Should be able to sign out.

### Example

#### Request
```
DELETE /api/v1/users/sign_out HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Authorization: 1246:69d775c9fe0a3ae3f761bf6a1c7fb1bc
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
    "id": 1246,
    "name": "name",
    "email": "user1@factory.com"
  }
}
```
