import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";
import {SeoService} from "../../../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'zaproszenia',
  templateUrl: './invitations.component.html',
  styleUrls: ['../../../../app.component.css', 'invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService, private meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'Realizujemy zaproszenia ślubne, rustykalne, klasyczne, glamour, spersonalizowane, indywidualne projekty.'});
    this.meta.updateTag({name: 'keywords', content: 'zaproszenia ślubne, weselne, rustykalne, glamour, klasyczne, goście, wstążka, wesele, ślub'});
    this.meta.updateTag({property:'og:title', content:'Zaproszenia ślubne, klasyczne, rustykalne, glamour, indywidualne projekty, pełna oferta - VAGart.pl'});
    this.meta.updateTag({property:'og:url', content:'https://vagart.pl/grafika/papeteria/zaproszenia'});
    this.meta.updateTag({property:'og:description', content:'Realizujemy zaproszenia ślubne, rustykalne, klasyczne, glamour, spersonalizowane, indywidualne projekty.'});
    this.meta.updateTag({property:'og:image', content:'https://vagart.pl/assets/img/grafika/papeteria/zaproszenia3.webp'});
    this.meta.updateTag({property:'og:image:alt', content:'Realizujemy zaproszenia ślubne, rustykalne, klasyczne, glamour, spersonalizowane, indywidualne projekty.'});
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.invitations);
  }

}
