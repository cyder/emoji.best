# User
## POST /users/sign_in
SignInを行う

### request
```js
{
  user: {
    email: :email,
    password: :password
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users/sign_in"
  method: "POST"
  user: {
    id: :id,
    name: :name,
    email: :email
  }
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/users/sign_in"
  method: "POST"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: There is not this email address.
* code: 2, message: This password is incorrect.
* code: 3, message: This user is banned.

## DELETE /users/sign_out
SignOutを行う

### request
```js
{}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users/sign_out"
  method: "DELETE"
  user: {
    id: :id,
    name: :name,
    email: :email
  }
}
```

#### 403 Forbidden
```js
{
  result: "Failed"
  url: "/users/sign_out"
  method: "DELETE"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: You have not sign in yet.

## POST /users
Userを作成する

### request
```js
{
  user: {
    name: :name,
    email: :email,
    password: :password,
    password_confirm: :password_confirm
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users"
  method: "POST"
  user: {
    id: :id,
    name: :name,
    email: :email
  }
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/users/sign_out"
  method: "POST"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: This email address has used.
* code: 2, message: This password is too easy.
* code: 3, message: These passwords do not match.

### PATCH /users
ユーザ情報を更新（パスワード以外）

### request
```js
{
  user: {
    name: :name,
    email: :email,
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users"
  method: "PATCH"
  user: {
    id: :id,
    name: :name,
    email: :email
  }
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/users"
  method: "PATCH"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: This email address has used.
* code: 2, message: You have not sign in yet.

### PATCH /users/password
パスワードを更新

### request
```js
{
  user: {
    old_password: :old_password,
    new_password: :new_password,
    new_password_confirm: :new_password_confirm,
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users"
  method: "PATCH"
  user: {
    id: :id,
    name: :name,
    email: :email
  }
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/users"
  method: "PATCH"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: This email address has used.
* code: 2, message: You have not sign in yet.

### DELETE /users
ユーザを削除（退会）

### request
```js
{
  user: {
    email: :email,
    password: :name
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users"
  method: "DELETE"
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/users/sign_out"
  method: "DELETE"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: This email address is incorrect.
* code: 2, message: This password is incorrect.

### GET /users/:id
他のユーザ情報を取得

### request
```js
{}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/users/:id"
  method: "GET"
  user: {
    name: :name
    upload_emoji: [
      {
        id: :id,
        name: :name,
        description: :description,
        number_of_donwloaded: :number_of_donwloaded,
        tag: [
          { id: id, name: :name },
          ...
        ]
      },
      ...
    ]
  }
}
```

#### 404 Not Found
```js
{
  result: "Failed"
  url: "/users/:id"
  method: "GET"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: There is not this user.
