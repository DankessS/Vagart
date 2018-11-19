import { Component } from "@angular/core";
@Component({
  selector: 'notfound',
  template: `
    <div class="container" style = "text-align: center; color: white">
  <h1>Strona o podanym adresie nie została znaleziona. Sprawdź poprawność adresu i spróbuj ponownie.</h1>
    </div>`,
})
export class NotFoundComponent {}
