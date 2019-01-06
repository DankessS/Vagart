import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
    selector: 'kontakt',
    templateUrl: './contact.component.html',
    styleUrls: ['../../app.component.css', 'contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;

    constructor(@Inject(PLATFORM_ID) private platformId: any, private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
      this.contactForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
        topic: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]),
        message: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10000)])
      });
    }

    public sendMessage() {
      if(this.contactForm.valid) {
        // this.http.post("/sendmail", this.contactForm.getRawValue()).subscribe(() => {
        //
        // });
      }
    }

    errorEmailMessage() {
      return this.contactForm.controls.email.hasError('required') ? 'Musisz podać adres email' :
        this.contactForm.controls.email.hasError('email') ? 'Nieprawidłowy adres email' :
          '';
    }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.backgroundImage = "url('../../../assets/img/contact_bckgrd.webp')";
      document.body.style.backgroundSize = "cover";
      document.getElementById("cn").classList.add('active');
    }
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.contact);
  }

}
