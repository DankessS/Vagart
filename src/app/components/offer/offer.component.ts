import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'oferta',
  templateUrl: './offer.component.html',
  styleUrls: ['../../app.component.css', 'offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/OFERTA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      document.getElementById("of").classList.add('active');
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.offer);
  }

}
