FROM node:8.15-alpine

WORKDIR /usr/src/app

COPY package.json . 
COPY dist/ /usr/src/app/dist 
RUN npm update

CMD [ "sh", "-c", "npm run now-start"]
