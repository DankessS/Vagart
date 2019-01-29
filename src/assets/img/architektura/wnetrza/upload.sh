#!/bin/bash

node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/architektura/wnetrza/glubczyce --outputDir /var/www/vagart/code/src/assets/img/gallery/glubczyce --gName=glubczyce
cp -r /var/www/vagart/code/src/assets/img/gallery/glubczyce /var/www/vagart/code/dist/browser/assets/img/gallery/glubczyce

echo KONIEC
