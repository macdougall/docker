FROM node:12.14.0-alpine as base

WORKDIR /app

RUN apk update
RUN apk add git
RUN apk add jq

RUN apk add --no-cache --virtual .gyp \
    autoconf \
    automake \
    g++ \
    libpng-dev \
    libtool \
    make \
    nasm \
    yarn \
    bash \
    python \
    python-dev \
    py-pip \
    build-base \
# uncomment for AWS cli 
#    && pip install awscli --upgrade --user \
    && apk --purge -v del py-pip \
    && rm -rf /var/cache/apk/*

EXPOSE 4000

COPY package.json .
COPY . .

RUN yarn

ENTRYPOINT ["yarn", "start"]



