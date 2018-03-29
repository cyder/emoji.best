# Emojix | [![CircleCI](https://circleci.com/gh/cyder-akashi/emojix.svg?style=svg)](https://circleci.com/gh/cyder-akashi/emojix)
slack用emoji投稿サイト、「Emojix（仮称）」用リポジトリです。

## 必要環境
* Xcode Command line tools
* [Homebrew](https://brew.sh/index_ja.html)
* [rbenv](https://github.com/rbenv/rbenv)
* [Ruby 2.4.2](https://github.com/ruby/ruby)
* [Ruby on Rails 5.1.5](https://github.com/rails/rails)
* [bundler](http://bundler.io/)
* [MySQL 5.7](https://dev.mysql.com/doc/refman/5.7/en/)
* [yarn](https://github.com/yarnpkg/yarn)
* [editorconfig plugin](http://editorconfig.org/#download)

### Xcode Command line tools
AppStoreからXcodeをインストールし、以下のコマンドを実行する。
```sh
xcode-select --install
```

### Homebrew
```sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### rbenv
```sh
brew update
brew install rbenv ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
```

### Ruby 2.4.2
```sh
rbenv install 2.4.2
```

### Ruby on rails 5.1.5
```sh
gem install rails -v 5.1.5
```

### bundler
```sh
gem install bundler
```

### mysql
```sh
brew install mysql
```

### yarn
```sh
brew install yarn
```

### editorconfig plugin
[ここ](http://editorconfig.org/#download)からエディタに合わせたものをインストールすること。

## セットアップ
1. 次のコマンドを実行する。
```sh
git@github.com:cyder-akashi/emojix.git
cd emojix
```

2. ライブラリをインストールする
```sh
bundle install --path=vendor/bundle
yarn install
```

3. MySqlを起動する
```sh
mysql.server start
```

4. Databaseを作成する
```sh
rails db:create
rails db:migrate
rails db:seed
```

5. サーバを起動する
```sh
yarn start
```

## 著者
* [森 篤史](@Mori-Atsushi)
