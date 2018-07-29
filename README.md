# emoji.best | [![CircleCI](https://circleci.com/gh/cyder/emoji.best.svg?style=svg)](https://circleci.com/gh/cyder/emoji.best) [![codecov](https://codecov.io/gh/cyder/emoji.best/branch/master/graph/badge.svg)](https://codecov.io/gh/cyder/emoji.best)
slack用emoji投稿サイト、「[emoji.best](https://emoji.best/)」用リポジトリです。

## 必要環境
* [docker](https://www.docker.com/)
* [editorconfig plugin](http://editorconfig.org/#download)

### docker
[ここ](https://docs.docker.com/docker-for-mac/install/)からダウンロードして起動する。

### editorconfig plugin
[ここ](http://editorconfig.org/#download)からエディタに合わせたものをインストールすること。

## セットアップ
1. 次のコマンドを実行する。
```sh
git@github.com:cyder-akashi/emoji.best.git
cd emoji.best
```

2. 環境変数を設定する。
```sh
cp .env.sample .env
vim .env
```
以下からAPI keyを取得する
* [Twitter](https://apps.twitter.com/)
* [Facebook](https://developers.facebook.com/)
* [Google](https://console.developers.google.com/apis/dashboard)

3. docker imageをbuildする。
```sh
docker-compose build
```

4. Databaseを作成する
```sh
docker-compose run rails rails db:create
docker-compose run rails rails db:migrate
docker-compose run rails rails db:seed
```

5. サーバを起動する
```sh
docker-compose up
```

6. [https://localhost:3035/sockjs-node/info?t=1503127986584net::ERR_INSECURE_RESPONSE](https://localhost:3035/sockjs-node/info?t=1503127986584net::ERR_INSECURE_RESPONSE) にアクセスし、SSL例外を承認する。

7. [https://localhost:3001](https://localhost:3001) を開く

## 著者
* [森 篤史](@Mori-Atsushi)
