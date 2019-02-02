#!/bin/bash

node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/architektura/wnetrza/glubczyce --outputDir /var/www/vagart/code/src/assets/img/gallery/glubczyce --gName=glubczyce
cp -r /var/www/vagart/code/src/assets/img/gallery/glubczyce /var/www/vagart/code/dist/browser/assets/img/gallery/glubczyce
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/architektura/wnetrza/myslowice --outputDir /var/www/vagart/code/src/assets/img/gallery/myslowice --gName=myslowice
cp -r /var/www/vagart/code/src/assets/img/gallery/myslowice /var/www/vagart/code/dist/browser/assets/img/gallery/myslowice
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/myslowice/wnetrza/tychy --outputDir /var/www/vagart/code/src/assets/img/gallery/tychy --gName=tychy
cp -r /var/www/vagart/code/src/assets/img/gallery/tychy /var/www/vagart/code/dist/browser/assets/img/gallery/tychy

echo KONIEC
