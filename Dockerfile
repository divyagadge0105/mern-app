FROM node:18

WORKDIR /app

COPY . .

RUN npm install --prefix server
RUN npm install --prefix client
RUN npm run build --prefix client

EXPOSE 5000

CMD ["node", "server/index.js"]