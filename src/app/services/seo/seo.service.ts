import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private link: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private doc) {
  }

  createLinkForCanonicalURL() {
    this.link = this.doc.createElement('link');
    this.link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(this.link);
    this.link.setAttribute('href', this.doc.URL);
  }
}
