import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";
import {SeoService} from "../../../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'ustron',
  templateUrl: './ustron.component.html',
  styleUrls: ['../../../../app.component.css', 'ustron.component.css']
})
export class UstronComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any, private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.ustron);
  }

}
