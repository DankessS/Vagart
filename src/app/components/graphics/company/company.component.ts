import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../componentNames.service";

@Component({
  selector: 'firma',
  templateUrl: './company.component.html',
  styleUrls: ['../../../app.component.css', 'company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService) {
    document.body.style.background = "url('../../../assets/img/GRAFIKA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.company);
  }

}
