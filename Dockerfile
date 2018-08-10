FROM ruby:2.4.2

ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential mysql-client libpq-dev curl
RUN apt-get update && apt-get install -y apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get install nodejs
RUN gem install bundler

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install

RUN mkdir /app
WORKDIR /app
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install
