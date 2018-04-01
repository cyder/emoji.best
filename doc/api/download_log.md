# DownloadLog
## POST /emoji/:id/downloaded
Emojiのダウンロード時に叩く

### request
```js
{}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/emoji/:id/downloaded"
  method: "POST"
  download_log: {
    id: :id,
    emoji_id: :id,
    user_id: :id,
    create_at: :create_at
  }
}
```

#### 404 Not Found
```js
{
  result: "Failed"
  url: "/emoji/:id/downloaded"
  method: "POST"
  error {
    code: :code
    message: :message
  }
}
```

* code: 0, message: There is not this emoij.
