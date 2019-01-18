FROM node:10.15

RUN mkdir -p urs/src/jumpService

WORKDIR /urs/src/jumpService

COPY package.json /usr/src/jumpService

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]