# Tag
## POST /emoji/:id/tags
Tagの追加

### request
```js
{
  tag: {
    name: :name
  }
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji/:id/tags"
  method: "POST"
  tag: {
    id: :id,
    emoji_id: :id,
    user_id: :id,
    name: :name,
    create_at: :create_at
  }
}
```

#### 403 Forbidden
```js
{
  result: "Failed"
  url: "/emoji/:id/tags"
  method: "POST"
  errors: [
    {code: :code, message: :message},
    {code: :code, message: :message},
    ...
  ]
}
```

* code: 0, message: You have not sign in yet.

##### 404 Not Found
```js
{
  result: "Failed"
  url: "/emoji/:id/tags"
  method: "POST"
  errors: [
    {code: :code, message: :message},
    {code: :code, message: :message},
    ...
  ]
}
```

* code: 0, message: There is not this emoij.

## DELETE /emoji/:emoji_id/tags/:tag_id
Tagの削除

### request
```js
{}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji/:emoji_id/tags/:tag_id"
  method: "DELETE"
}
```

#### 403 Forbidden
```js
{
  result: "Failed"
  url: "/emoji/:emoji_id/tags/:tag_id"
  method: "DELETE"
  errors: [
    {code: :code, message: :message},
    {code: :code, message: :message},
    ...
  ]
}
```

* code: 0, message: You have not sign in yet.

#### 404 Not Found
```js
{
  result: "Failed"
  url: "/emoji/:emoji_id/tags/:tag_id"
  method: "DELETE"
  errors: [
    {code: :code, message: :message},
    {code: :code, message: :message},
    ...
  ]
}
```

* code: 0, message: There is not this emoij.
* code: 1, message: There is not this tag.
