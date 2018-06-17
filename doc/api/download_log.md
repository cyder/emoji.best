# DownloadLog
## POST /emoji/:id/download
Emojiのダウンロード時に叩く
Zipがダウンロードされる。

### request
```js
{emojis: [:emoji.id, :emoji.id]}
```

### response
#### 200 OK
ZIPファイル
