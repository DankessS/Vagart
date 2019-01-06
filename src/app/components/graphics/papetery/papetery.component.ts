import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";
import {SeoService} from "../../../services/seo/seo.service";

@Component({
  selector: 'papeteria',
  templateUrl: './papetery.component.html',
  styleUrls: ['../../../app.component.css', 'papetery.component.css']
})
export class PapeteryComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService, private meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'Realizujemy kompleksową papeterię ślubną, zaproszenia ślubne, zawieszki na alkohol, winietki, banery, bileciki na kołacz, księgi gości i wiele innych.'});
    this.meta.updateTag({name: 'keywords', content: 'zaproszenia ślubne, winietki, banery, zawieszki na alkohol, plakaty, wizytówki, dekoracje'});
    this.meta.updateTag({property:'og:title', content:'Papeteria ślubna, zaproszenia, winietki, zawieszki, ozdoby, dekoracja - VAGart.pl'});
    this.meta.updateTag({property:'og:url', content:'https://vagart.pl/grafika/papeteria'});
    this.meta.updateTag({property:'og:description', content:'Realizujemy kompleksową papeterię ślubną, zaproszenia ślubne, zawieszki na alkohol, winietki, banery, bileciki na kołacz, księgi gości i wiele innych.'});
    this.meta.updateTag({property:'og:image', content:'https://vagart.pl/assets/img/grafika/papeteria/zaproszenia/zaproszenia3.JPG'});
    this.meta.updateTag({property:'og:image:alt', content:'Realizujemy kompleksową papeterię ślubną, zaproszenia ślubne, zawieszki na alkohol, winietki, banery, bileciki na kołacz, księgi gości i wiele innych.'});
    document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.papetery);
  }

}
