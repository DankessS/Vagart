import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private doc) {
  }

  createLinkForCanonicalURL() {
    this.doc.getElementById("can").setAttribute("href", this.doc.URL);
  }
}
