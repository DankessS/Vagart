import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";
import {SeoService} from "../../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'meble',
  templateUrl: './furnitures.component.html',
  styleUrls: ['../../../../app.component.css', 'furnitures.component.css']
})
export class FurnituresComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any, private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.furnitures);
  }

}
