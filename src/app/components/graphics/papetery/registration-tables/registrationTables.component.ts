import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";

@Component({
  selector: 'tablice_rejestracyjne',
  templateUrl: './registrationTables.component.html',
  styleUrls: ['../../../../app.component.css', 'registrationTables.component.css']
})
export class RegistrationTablesComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService) {
    document.body.style.background = "url('../../../assets/img/GRAFIKA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.registrationTables);
  }

}
