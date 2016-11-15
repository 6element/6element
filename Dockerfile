FROM node:4-alpine

COPY package.json ./package.json
RUN npm install

COPY ./client ./client
COPY ./modeles ./modeles
COPY ./references ./references
COPY ./server ./server
COPY ./tools ./tools

CMD ["npm", "run", "prod"]
