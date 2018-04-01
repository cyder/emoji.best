# User
## POST /search
キーワード検索を行う

### request
```js
{
  keyword: :keywoird,
  target: ["title", "description", "tag"] //検索対象を選ぶ
  order: "new" or "popular"
  token: :next_token, //オプション
  num: :1ページの表示数
}
```

### response
#### 200 OK
```js
{
  result: "Success"
  url: "/search"
  method: "POST"
  result: {
    total: :検索結果数
    page: :ページ数
    num: :1ページの表示数
    target: ["title", "description", "tag"] //検索対象を選ぶ
    order: "new" or "popular"
    next_token: :次ページのトークン,
    previous_token: :前ページのトークン,
    emoji: [
      {
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
    ],
  }
}
```
