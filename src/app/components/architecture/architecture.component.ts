import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'architektura',
  templateUrl: './architecture.component.html',
  styleUrls: ['../../app.component.css', 'architecture.component.css']
})
export class ArchitectureComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
    document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.getElementById("at").classList.add('active');
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.architecture);
  }

}
