import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'video',
  templateUrl: './video.component.html',
  styleUrls: ['../../app.component.css', 'video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, seoService: SeoService) {
    seoService.createLinkForCanonicalURL();
    document.body.style.background = "url('../../../assets/img/VIDEO.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.getElementById("vd").classList.add('active');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.video);
  }

}
