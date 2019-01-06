import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";
import {SeoService} from "../../../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'winietki',
  templateUrl: './vignettes.component.html',
  styleUrls: ['../../../../app.component.css', 'vignettes.component.css']
})
export class VignettesComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.vignettes);
  }

}
