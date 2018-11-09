cd C:/Users/VAGART/workspace/vagart/
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/banery --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/banners --gName=banners
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/bileciki_na_kolacz --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/cakeTickets --gName=cakeTickets
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/dekoracje --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/decoration --gName=decoration
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/koszyczek_ratunkowy --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/helpTicket --gName=helpTicket
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/ksiega_gosci --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/guestBook --gName=guestBook
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/menu --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/menu --gName=menu
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/numeracja_stolikow --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/table_numeration --gName=table_numeration
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/plakaty --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/poster --gName=poster
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/plan_usadzenia_gosci --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/sitPlan --gName=sitPlan
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/tablice_rejestracyjne --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/registrationTables --gName=registrationTables
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/toppery --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/toppers --gName=toppers
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/winietki --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/vignettes --gName=vignettes
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/zaproszenia --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/invitations --gName=invitations
node node_modules/angular2-image-gallery/convert.js C:/Users/VAGART/workspace/vagart/src/assets/img/grafika/papeteria/zawieszki --outputDir C:/Users/vagart/workspace/vagart/src/assets/img/gallery/pendants --gName=pendants

git add .
git commit -m "New photos"
git pull -r heroku master
git push heroku master
PAUSE