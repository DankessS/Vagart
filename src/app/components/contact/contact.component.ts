import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../componentNames.service";
import {SeoService} from "../../services/seo/seo.service";

@Component({
    selector: 'kontakt',
    templateUrl: './contact.component.html',
    styleUrls: ['../../app.component.css', 'contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;

    constructor(private titleService: Title, private names: ComponentNamesService, private seoService: SeoService) {
      document.body.style.backgroundImage = "url('../../../assets/img/contact_bckgrd.webp')";
      document.body.style.backgroundSize = "cover";
      document.getElementById("cn").classList.add('active');
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
    this.seoService.createLinkForCanonicalURL();
    this.titleService.setTitle(this.names.contact);
  }

}
