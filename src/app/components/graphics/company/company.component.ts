import {Component, OnInit} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";
import {SeoService} from "../../../services/seo/seo.service";

@Component({
  selector: 'firma',
  templateUrl: './company.component.html',
  styleUrls: ['../../../app.component.css', 'company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, private seoService: SeoService, private meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'Kompleksowa oprawa wizualna dla firmy, loga, winietki, wizytówki, plakaty, reklama dla Twojej marki - VAGart.pl'});
    this.meta.updateTag({name: 'keywords', content: 'firma, oprawa graficzna, logo, wizytówki, plakaty, reklama, działalność, wizualna'});
    this.meta.updateTag({property:'og:title', content:'Oprawa wizualna firmy, loga, wizytówki, plakaty - VAGart.pl'});
    this.meta.updateTag({property:'og:url', content:'https://vagart.pl/grafika/firma'});
    this.meta.updateTag({property:'og:description', content:''});
    this.meta.updateTag({property:'og:image', content:'https://vagart.pl/assets/img/grafika/firma.webp'});
    this.meta.updateTag({property:'og:image:alt', content:'Kompleksowa oprawa wizualna dla firmy, loga, winietki, wizytówki, plakaty, reklama dla Twojej marki - VAGart.pl'});
    document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.company);
  }

}
