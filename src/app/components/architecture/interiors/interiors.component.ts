import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";
import {SeoService} from "../../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'wnetrza',
  templateUrl: './interiors.component.html',
  styleUrls: ['../../../app.component.css', 'interiors.component.css']
})
export class InteriorsComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  public ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.png') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.interiors);
  }

}
