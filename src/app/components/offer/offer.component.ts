import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'oferta',
  templateUrl: './offer.component.html',
  styleUrls: ['../../app.component.css', 'offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, seoService: SeoService) {
    seoService.createLinkForCanonicalURL();
    document.body.style.background = "url('../../../assets/img/OFERTA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.getElementById("of").classList.add('active');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.offer);
  }

}
