import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";

@Component({
  selector: 'grafika',
  templateUrl: './graphics.component.html',
  styleUrls: ['../../app.component.css', 'graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService) {
    document.body.style.background = "url('../../../assets/img/GRAFIKA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.getElementById("gf").classList.add('active');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.graphics);
  }

}
