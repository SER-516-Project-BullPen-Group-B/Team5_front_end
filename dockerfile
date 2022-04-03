FROM node:16.14.2-slim

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY ./ ./

RUN yarn

CMD ["yarn", "start"] 