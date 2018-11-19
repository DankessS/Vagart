import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from "./components/contact/contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {routing} from "./routes";
import {HomeComponent} from "./components/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkTableModule} from "@angular/cdk/table";
import {CdkTreeModule} from "@angular/cdk/tree";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import {OfferComponent} from "./components/offer/offer.component";
import {VideoComponent} from "./components/video/video.component";
import {RouterModule} from "@angular/router";
import {ArchitectureComponent} from "./components/architecture/architecture.component";
import {GraphicsComponent} from "./components/graphics/graphics.component";
import {CompanyComponent} from "./components/graphics/company/company.component";
import {PapeteryComponent} from "./components/graphics/papetery/papetery.component";
import {InteriorsComponent} from "./components/architecture/interiors/interiors.component";
import {ComponentNamesService} from "./components/componentNames.service";
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import {TableNumerationComponent} from "./components/graphics/papetery/table-numeration/tableNumeration.component";
import {MenuComponent} from "./components/graphics/papetery/menu/menu.component";
import {BannersComponent} from "./components/graphics/papetery/banners/banners.component";
import {CakeTicketsComponent} from "./components/graphics/papetery/cake-tickets/cakeTickets.component";
import {DecorationComponent} from "./components/graphics/papetery/decoration/decoration.component";
import {GuestBookComponent} from "./components/graphics/papetery/guest-book/guestBook.component";
import {HelpBasketComponent} from "./components/graphics/papetery/help-basket/helpBasket.component";
import {InvitationsComponent} from "./components/graphics/papetery/inivitations/invitations.component";
import {RegistrationTablesComponent} from "./components/graphics/papetery/registration-tables/registrationTables.component";
import {SitPlanComponent} from "./components/graphics/papetery/sit-plan/sitPlan.component";
import {ToppersComponent} from "./components/graphics/papetery/toppers/toppers.component";
import {VignettesComponent} from "./components/graphics/papetery/vignettes/vignettes.component";
import {PosterComponent} from "./components/graphics/papetery/poster/poster.component";
import {PendantsComponent} from "./components/graphics/papetery/pendants/pendants.component";

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    OfferComponent,
    VideoComponent,
    ArchitectureComponent,
    CompanyComponent,
    GraphicsComponent,
    PapeteryComponent,
    InteriorsComponent,
    TableNumerationComponent,
    MenuComponent,
    BannersComponent,
    CakeTicketsComponent,
    DecorationComponent,
    GuestBookComponent,
    HelpBasketComponent,
    InvitationsComponent,
    PendantsComponent,
    PosterComponent,
    RegistrationTablesComponent,
    SitPlanComponent,
    ToppersComponent,
    VignettesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'vagart'}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule,
    RouterModule,
    Angular2ImageGalleryModule
  ],
  providers: [ComponentNamesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
