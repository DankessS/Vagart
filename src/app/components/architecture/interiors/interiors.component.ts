import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";
import {SeoService} from "../../../services/seo/seo.service";

@Component({
  selector: 'wnetrza',
  templateUrl: './interiors.component.html',
  styleUrls: ['../../../app.component.css', 'interiors.component.css']
})
export class InteriorsComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
    document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  public ngOnInit() {
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.interiors);
  }

}
