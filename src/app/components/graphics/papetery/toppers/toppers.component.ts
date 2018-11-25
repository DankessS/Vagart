import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";
import {SeoService} from "../../../../services/seo/seo.service";

@Component({
  selector: 'toppery',
  templateUrl: './toppers.component.html',
  styleUrls: ['../../../../app.component.css', 'toppers.component.css']
})
export class ToppersComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
    document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.sitPlan);
  }

}
