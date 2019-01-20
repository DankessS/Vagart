#!/bin/bash

node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/banery --outputDir /var/www/vagart/code/src/assets/img/gallery/banners --gName=banners 
cp -r /var/www/vagart/code/src/assets/img/gallery/banners /var/www/vagart/code/dist/browser/assets/img/gallery/banners
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/bileciki_na_kolacz --outputDir /var/www/vagart/code/src/assets/img/gallery/cakeTickets --gName=cakeTickets 
cp -r /var/www/vagart/code/src/assets/img/gallery/cakeTickets /var/www/vagart/code/dist/browser/assets/img/gallery/cakeTickets
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/dekoracje --outputDir /var/www/vagart/code/src/assets/img/gallery/decoration --gName=decoration 
cp -r /var/www/vagart/code/src/assets/img/gallery/decoration /var/www/vagart/code/dist/browser/assets/img/gallery/decoration
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/koszyczek_ratunkowy --outputDir /var/www/vagart/code/src/assets/img/gallery/helpTicket --gName=helpTicket 
cp -r /var/www/vagart/code/src/assets/img/gallery/helpTicket /var/www/vagart/code/dist/browser/assets/img/gallery/helpTicket
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/ksiega_gosci --outputDir /var/www/vagart/code/src/assets/img/gallery/guestBook --gName=guestBook 
cp -r /var/www/vagart/code/src/assets/img/gallery/guestBook /var/www/vagart/code/dist/browser/assets/img/gallery/guestBook
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/numeracja_stolikow --outputDir /var/www/vagart/code/src/assets/img/gallery/table_numeration --gName=table_numeration 
cp -r /var/www/vagart/code/src/assets/img/gallery/table_numeration /var/www/vagart/code/dist/browser/assets/img/gallery/table_numeration
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/menu --outputDir /var/www/vagart/code/src/assets/img/gallery/menu --gName=menu 
cp -r /var/www/vagart/code/src/assets/img/gallery/menu /var/www/vagart/code/dist/browser/assets/img/gallery/menu
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/plakaty --outputDir /var/www/vagart/code/src/assets/img/gallery/poster --gName=poster 
cp -r /var/www/vagart/code/src/assets/img/gallery/poster /var/www/vagart/code/dist/browser/assets/img/gallery/poster
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/plan_usadzenia_gosci --outputDir /var/www/vagart/code/src/assets/img/gallery/sitPlan --gName=sitPlan 
cp -r /var/www/vagart/code/src/assets/img/gallery/sitPlan /var/www/vagart/code/dist/browser/assets/img/gallery/sitPlan
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/tablice_rejestracyjne --outputDir /var/www/vagart/code/src/assets/img/gallery/registrationTables --gName=registrationTables 
cp -r /var/www/vagart/code/src/assets/img/gallery/registrationTables /var/www/vagart/code/dist/browser/assets/img/gallery/registrationTables
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/toppery --outputDir /var/www/vagart/code/src/assets/img/gallery/toppers --gName=toppers 
cp -r /var/www/vagart/code/src/assets/img/gallery/toppers /var/www/vagart/code/dist/browser/assets/img/gallery/toppers
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/winietki --outputDir /var/www/vagart/code/src/assets/img/gallery/vignettes --gName=vignettes 
cp -r /var/www/vagart/code/src/assets/img/gallery/vignettes /var/www/vagart/code/dist/browser/assets/img/gallery/vignettes
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/zaproszenia --outputDir /var/www/vagart/code/src/assets/img/gallery/invitations --gName=invitations 
cp -r /var/www/vagart/code/src/assets/img/gallery/invitations /var/www/vagart/code/dist/browser/assets/img/gallery/invitations
node /var/www/vagart/code/node_modules/angular2-image-gallery/convert.js /var/www/vagart/code/src/assets/img/grafika/papeteria/zawieszki --outputDir /var/www/vagart/code/src/assets/img/gallery/pendants --gName=pendants 
cp -r /var/www/vagart/code/src/assets/img/gallery/pendants /var/www/vagart/code/dist/browser/assets/img/gallery/pendants

echo KONIEC
