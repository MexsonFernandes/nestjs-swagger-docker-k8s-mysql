FROM node:12-alpine

WORKDIR /app
EXPOSE 3000

COPY package* ./
RUN apk update && apk add --no-cache --virtual .build-deps make gcc g++ python \
    && rm -rf node_modules && yarn install --frozen-lockfile \
    && apk del .build-deps
COPY . .

ENV NODE_ENV=production
RUN npm run build
CMD node dist/main.js