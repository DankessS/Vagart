import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'grafika',
  templateUrl: './graphics.component.html',
  styleUrls: ['../../app.component.css', 'graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService, private meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'Realizujemy wyszukane projekty graficzne, zaproszenia ślubne, dekoracje, loga, winietki, banery, zawieszki, wizytówki, identyfikazję wizualną firmy.'});
    this.meta.updateTag({name: 'keywords', content: 'zaproszenia ślubne, winietki, logo, banery, zawieszki, identyfikacja wizualna firmy, plakaty, wizytówki, dekoracje'});
    this.meta.updateTag({property:'og:title', content:'Projekty graficzne,zaproszenia ślubne, dekoracje, loga, winietki oraz wiele innych - VAGart.pl'});
    this.meta.updateTag({property:'og:url', content:'https://vagart.pl/grafika'});
    this.meta.updateTag({property:'og:description', content:'Realizujemy wyszukane projekty graficzne, zaproszenia ślubne, dekoracje, loga, winietki, banery, zawieszki, wizytówki, identyfikazję wizualną firmy.'});
    this.meta.updateTag({property:'og:image', content:'https://vagart.pl/assets/img/grafika/papeteria/zaproszenia/zaproszenia3.JPG'});
    this.meta.updateTag({property:'og:image:alt', content:'Realizujemy wyszukane projekty graficzne, zaproszenia ślubne, dekoracje, loga, winietki, banery, zawieszki, wizytówki, identyfikazję wizualną firmy.'});
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      document.getElementById("gf").classList.add('active');
    }
    this.titleService.setTitle(this.names.graphics);
    this.seoService.createLinkForCanonicalURL();
  }

}
