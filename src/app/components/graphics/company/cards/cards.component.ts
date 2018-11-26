import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";
import {SeoService} from "../../../../services/seo/seo.service";

@Component({
  selector: 'wizytowki',
  templateUrl: './cards.component.html',
  styleUrls: ['../../../../app.component.css', 'cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
    document.body.style.background = "url('../../../assets/img/GRAFIKA.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.cards);
  }

}
