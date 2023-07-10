FROM node:alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install vite

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"]