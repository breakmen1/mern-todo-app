
FROM node:18-slim

WORKDIR /apps

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]

