FROM node:8.15-alpine

WORKDIR /usr/src/app

COPY . .

RUN cd bin
RUN ["chmod", "+x", "upload.sh"]
RUN ./upload.sh
RUN npm update
RUN npm run build:prod

CMD [ "sh", "-c", "npm run now-start"]
