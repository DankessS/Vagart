#!/bin/bash

node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/firma/logo --outputDir /var/www/vagart/code/src/assets/img/gallery/logo --gName=logo
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/firma/wizytowki --outputDir /var/www/vagart/code/src/assets/img/gallery/cards --gName=cards
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/firma/plakaty --outputDir /var/www/vagart/code/src/assets/img/gallery/posters --gName=posters
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/firma/inne --outputDir /var/www/vagart/code/src/assets/img/gallery/other --gName=other

echo KONIEC
