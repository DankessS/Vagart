FROM node:8

WORKDIR /usr/src/app

COPY . .

RUN ["chmod", "+x", "/usr/src/app/bin/upload.sh"]
RUN ./bin/upload.sh
RUN npm install
RUN npm run build:prod

CMD [ "sh", "-c", "npm run now-start"]
