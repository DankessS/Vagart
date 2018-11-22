import {Component, OnInit} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";

@Component({
  selector: 'grafika',
  templateUrl: './graphics.component.html',
  styleUrls: ['../../app.component.css', 'graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, private meta: Meta) {
    this.meta.updateTag({name: 'description', content: 'Realizujemy wyszukane projekty graficzne, zaproszenia ślubne, dekoracje, loga, winietki, banery, zawieszki, wizytówki, identyfikazję wizualną firmy.'});
    this.meta.updateTag({name: 'keywords', content: 'zaproszenia ślubne, winietki, logo, banery, zawieszki, identyfikacja wizualna firmy, plakaty, wizytówki, dekoracje'});
    this.meta.updateTag({property:'og:title', content:'Projekty graficzne,zaproszenia ślubne, dekoracje, loga, winietki oraz wiele innych - VAGart.pl'});
    this.meta.updateTag({property:'og:url', content:'https://vagart.pl/grafika'});
    this.meta.updateTag({property:'og:description', content:'Realizujemy wyszukane projekty graficzne, zaproszenia ślubne, dekoracje, loga, winietki, banery, zawieszki, wizytówki, identyfikazję wizualną firmy.'});
    this.meta.updateTag({property:'og:image', content:'../../../assets/img/grafika/papeteria/zaproszenia/zaproszenia3.JPG'});
    this.meta.updateTag({property:'og:image:alt', content:'Realizujemy wyszukane projekty graficzne, zaproszenia ślubne, dekoracje, loga, winietki, banery, zawieszki, wizytówki, identyfikazję wizualną firmy.'});
    document.body.style.background = "url('../../../assets/img/GRAFIKA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.getElementById("gf").classList.add('active');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.graphics);
  }

}
