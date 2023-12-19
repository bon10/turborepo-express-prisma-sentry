FROM node:18.19.0-alpine

RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
ENV PORT 8080

COPY .gitignore .gitignore
COPY package.json package.json
COPY yarn.lock ./yarn.lock
RUN yarn install

COPY . ./

CMD ["node", "dist/index.js"]
