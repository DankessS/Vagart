import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'o-nas',
  templateUrl: './about.component.html',
  styleUrls: ['../../app.component.css', 'about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, seoService: SeoService) {
    seoService.createLinkForCanonicalURL();
    // document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.png') no-repeat center center fixed";
    // document.body.style.backgroundSize = "cover";
    document.getElementById("ab").classList.add('active');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.about);
  }

}
