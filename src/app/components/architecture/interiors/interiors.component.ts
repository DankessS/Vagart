import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";

@Component({
  selector: 'wnętrza',
  templateUrl: './interiors.component.html',
  styleUrls: ['../../../app.component.css', 'interiors.component.css']
})
export class InteriorsComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService) {
    document.body.style.background = "url('../../../assets/img/ARCHITEKTURA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  public ngOnInit() {
    this.titleService.setTitle(this.names.interiors);
  }

}
