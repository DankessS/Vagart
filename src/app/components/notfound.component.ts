import {APP_ID, Component, Inject, OnInit, Optional, PLATFORM_ID} from "@angular/core";
import {RESPONSE} from "@nguniversal/express-engine/tokens";
import {isPlatformServer} from "@angular/common";

interface PartialResponse {
  status(code: number): this;
}

@Component({
  selector: 'notfound',
  template: `
    <div class="container" style = "text-align: center; color: white">
  <h1>Strona o podanym adresie nie została znaleziona. Sprawdź poprawność adresu i spróbuj ponownie.</h1>
    </div>`,
})
export class NotFoundComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    @Optional() @Inject(RESPONSE) private response: PartialResponse,
  ) { }

  ngOnInit() {
    if (isPlatformServer(this.platformId) && this.response) {
      this.response.status(404);
    }
  }
}
