FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=prod

COPY . .

ENV NODE_ENV=production PORT=3000

EXPOSE $PORT

CMD [ "node", "--unhandled-rejections=strict", "-r", "dotenv/config", "." ]
