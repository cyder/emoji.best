# User
## POST /search
キーワード検索を行う

### request
```js
{
  keyword: :keywoird, //オプション（指定しなかった場合すべてのEmojiが対象になる）
  order: "new" or "popular" //オプション（デフォルト：new）
  page: :ページ番号, //オプション（デフォルト：0）
  num: :1ページの表示数　//オプション（デフォルト：10）
  target: :"all" or "tag"　//オプション（デフォルト：all）
}
```

### response
#### 200 OK
```js
{
  total: :検索結果数
  num: :1ページの表示数
  order: "new" or "popular"
  page: :ページ番号,
  target: :検索対象,
  keyword: :検索ワード,
  emoji: [
    {
      id: :id,
      name: :name,
      description: :description,
      number_of_downloaded: :number_of_downloaded,
      tag: [
        { id: id, name: :name },
        ...
      ],
      images: {
        learge_url: :large_image,
        thumbnail_url: :thumbnail_image,
        slack_url: :slack_image
      },
      user: {
        id: :id,
        name: :name
      }
    }
  ]
}
```
