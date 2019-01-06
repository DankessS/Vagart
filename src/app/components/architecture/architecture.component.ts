import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'architektura',
  templateUrl: './architecture.component.html',
  styleUrls: ['../../app.component.css', 'architecture.component.css']
})
export class ArchitectureComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any, private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.webp') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      document.getElementById("at").classList.add('active');
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.architecture);
  }

}
