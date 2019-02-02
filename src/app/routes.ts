import {Route, RouterModule} from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {OfferComponent} from "./components/offer/offer.component";
import {VideoComponent} from "./components/video/video.component";
import {GraphicsComponent} from "./components/graphics/graphics.component";
import {ArchitectureComponent} from "./components/architecture/architecture.component";
import {CompanyComponent} from "./components/graphics/company/company.component";
import {PapeteryComponent} from "./components/graphics/papetery/papetery.component";
import {InteriorsComponent} from "./components/architecture/interiors/interiors.component";
import {TableNumerationComponent} from "./components/graphics/papetery/table-numeration/tableNumeration.component";
import {MenuComponent} from "./components/graphics/papetery/menu/menu.component";
import {BannersComponent} from "./components/graphics/papetery/banners/banners.component";
import {CakeTicketsComponent} from "./components/graphics/papetery/cake-tickets/cakeTickets.component";
import {DecorationComponent} from "./components/graphics/papetery/decoration/decoration.component";
import {GuestBookComponent} from "./components/graphics/papetery/guest-book/guestBook.component";
import {HelpBasketComponent} from "./components/graphics/papetery/help-basket/helpBasket.component";
import {SitPlanComponent} from "./components/graphics/papetery/sit-plan/sitPlan.component";
import {RegistrationTablesComponent} from "./components/graphics/papetery/registration-tables/registrationTables.component";
import {ToppersComponent} from "./components/graphics/papetery/toppers/toppers.component";
import {VignettesComponent} from "./components/graphics/papetery/vignettes/vignettes.component";
import {InvitationsComponent} from "./components/graphics/papetery/inivitations/invitations.component";
import {PosterComponent} from "./components/graphics/papetery/poster/poster.component";
import {PendantsComponent} from "./components/graphics/papetery/pendants/pendants.component";
import {NotFoundComponent} from "./components/notfound.component";
import {CardsComponent} from "./components/graphics/company/cards/cards.component";
import {PostersComponent} from "./components/graphics/company/posters/posters.component";
import {OtherComponent} from "./components/graphics/company/other/other.component";
import {LogoComponent} from "./components/graphics/company/logo/logo.component";
import {GlubczyceComponent} from "./components/architecture/interiors/glubczyce/glubczyce.component";
import {TychyComponent} from "./components/architecture/interiors/tychy/tychy.component";
import {MyslowiceComponent} from "./components/architecture/interiors/myslowice/myslowice.component";
import {FurnituresComponent} from "./components/architecture/furnitures/furnitures.component";

export const routes: Route[] = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'architektura', component: ArchitectureComponent},
  {path: 'architektura/wnetrza', component: InteriorsComponent},
  {path: 'architektura/meble', component: FurnituresComponent},
  {path: 'architektura/wnetrza/glubczyce', component: GlubczyceComponent},
  {path: 'architektura/wnetrza/myslowice', component: MyslowiceComponent},
  {path: 'architektura/wnetrza/tychy', component: TychyComponent},
  {path: 'grafika', component: GraphicsComponent},
  {path: 'grafika/firma', component: CompanyComponent},
  {path: 'grafika/firma/wizytowki', component: CardsComponent},
  {path: 'grafika/firma/plakaty', component: PostersComponent},
  {path: 'grafika/firma/inne', component: OtherComponent},
  {path: 'grafika/firma/logo', component: LogoComponent},
  {path: 'grafika/papeteria', component: PapeteryComponent},
  {path: 'grafika/papeteria/numeracja_stolikow', component: TableNumerationComponent},
  {path: 'grafika/papeteria/menu', component: MenuComponent},
  {path: 'grafika/papeteria/banery', component: BannersComponent},
  {path: 'grafika/papeteria/bileciki_na_kolacz', component: CakeTicketsComponent},
  {path: 'grafika/papeteria/dekoracje', component: DecorationComponent},
  {path: 'grafika/papeteria/ksiega_gosci', component: GuestBookComponent},
  {path: 'grafika/papeteria/koszyczek_ratunkowy', component: HelpBasketComponent},
  {path: 'grafika/papeteria/plakaty', component: PosterComponent},
  {path: 'grafika/papeteria/plan_usadzenia_gosci', component: SitPlanComponent},
  {path: 'grafika/papeteria/tablice_rejestracyjne', component: RegistrationTablesComponent},
  {path: 'grafika/papeteria/toppery', component: ToppersComponent},
  {path: 'grafika/papeteria/winietki', component: VignettesComponent},
  {path: 'grafika/papeteria/zaproszenia', component: InvitationsComponent},
  {path: 'grafika/papeteria/zawieszki', component: PendantsComponent},
  {path: 'oferta', component: OfferComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', redirectTo: '/notfound'}
];

export const routing = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
