import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', 'home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(private titleService: Title, private names: ComponentNamesService, seoService: SeoService) {
    seoService.createLinkForCanonicalURL();
    document.getElementById("hm").classList.add('active');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.home);
  }



}
