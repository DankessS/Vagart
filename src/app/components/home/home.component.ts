import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', 'home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(@Inject(PLATFORM_ID) private platformId: any,private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById("hm").classList.add('active');
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.home);
  }



}
