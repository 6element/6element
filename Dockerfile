FROM node:4-alpine

WORKDIR /6element

COPY package.json ./package.json
RUN npm install

COPY ./client ./client
COPY ./references ./references
COPY ./server ./server
COPY ./tools ./tools

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
