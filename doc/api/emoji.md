# Emoji
## POST /emoji
Emojiのアップロードを行う

### request
```js
{
  emoji: {
    name: :name,
    description: :description,
    image: :image
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji"
  method: "POST"
  emoji: {
    id: :id,
    name: :name,
    description: :description,
    image: {
        original_url: :origial_url,
        learge_url: :learge_url,
        thumbnail_url: :thumbnail_url,
        slack_url: :slack_url,
    }
  }
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/emoji"
  method: "POST"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: There is already this name emoji.

#### 400 Forbidden
```js
{
  result: "Failed"
  url: "/emoji"
  method: "POST"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: You have not sign in yet.

## PATCH /emoji/:id
Emojiの編集を行う（画像以外）

### request
```js
{
  emoji: {
    name: :name,
    description: :description
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji/:id"
  method: "PATCH"
  emoji: {
    id: :id,
    name: :name,
    description: :description,
    image: {
        original_url: :origial_url,
        learge_url: :learge_url,
        thumbnail_url: :thumbnail_url,
        slack_url: :slack_url,
    }
  }
}
```

#### 400 Bad Request
```js
{
  result: "Failed"
  url: "/emoji/:id"
  method: "PATCH"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: Bad parameter.
* code: 1, message: There is already this name emoji.

#### 403 Forbidden
```js
{
  result: "Failed"
  url: "/emoji/:id"
  method: "PATCH"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: This emoji is not yours.

#### 404 Not Found
```js
{
  result: "Failed"
  url: "/emoji/:id"
  method: "PATCH"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: There is not this emoij.

## DELETE /emoji/:id
Emojiの削除を行う

### request
```js
{}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji/:id"
  method: "DELETE"
}
```

#### 403 Forbidden
```js
{
  result: "Failed"
  url: "/emoji/:id"
  method: "DELETE"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: This emoji is not yours.

#### 404 Not Found
```js
{
  result: "Failed"
  url: "/emoji/:id"
  method: "DELETE"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: There is not this emoij.

## GET /emoji/:id
Emojiの情報を取得する

### request
```js
{}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji/:id"
  method: "GET"
  emoji: {
    id: :id,
    name: :name,
    description: :description,
    number_of_donwloaded: :number_of_donwloaded,
    tag: [
      { id: id, name: :name },
      ...
    ]
    user: {
      name: :name
    }
  }
}
```

#### 404 Not Found
```js
{
  result: "Failed"
  url: "/emoji/:id"
  method: "GET"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: There is not this emoij.
