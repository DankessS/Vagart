// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class ComponentNamesService {
  title: string = 'VAGart | ';
  home: string = this.title + 'Pracownia projektowa';
  architecture: string = this.title + 'Architektura ';
  about: string = this.title + 'O nas';
  interiors: string = this.architecture + '| Wnętrza';
  glubczyce: string = this.interiors + '| Glubczyce';
  contact: string = this.title + 'Kontakt';
  graphics: string = 'Projekty graficzne,zaproszenia ślubne, dekoracje, loga, winietki oraz wiele innych - VAGart.pl';
  company: string = this.graphics + '| Firma';
  papetery: string = this.graphics + '| Papeteria ';
  tableNumeration: string = this.papetery + '| Numeracja stolików';
  banners: string = this.papetery + '| Banery';
  cards: string = this.company + '| Wizytówki';
  posters: string = this.company + '| Plakaty';
  other: string = this.company + '| Inne';
  logo: string = this.company + '| Logo';
  cakeTickets: string = this.papetery + '| Bileciki na kołacz';
  decoration: string = this.papetery + '| Dekoracje';
  guestBook: string = this.papetery + '| Księga gości';
  helpBasket: string = this.papetery + '| Koszyczek ratunkowy';
  invitations: string = this.papetery + '| Zaproszenia';
  pendants: string = this.papetery + '| Zawieszki';
  poster: string = this.papetery + '| Plakaty';
  registrationTables: string = this.papetery + '| Tablice rejestracyjne';
  sitPlan: string = this.papetery + '| Plan usadzenia gości';
  vignettes: string = this.papetery + '| Plan usadzenia gości';
  toppers: string = this.papetery + '| Toppery';
  menu: string = this.papetery + '| Menu';
  offer: string = this.title + 'Oferta';
  video: string = this.title + 'Video';
}
