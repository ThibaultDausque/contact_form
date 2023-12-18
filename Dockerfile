FROM node:21-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 8000

ENV HOST=0.0.0.0 PORT=8000

CMD ["npm", "start"]