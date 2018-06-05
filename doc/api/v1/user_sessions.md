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
  }
}
```
