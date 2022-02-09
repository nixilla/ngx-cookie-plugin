import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'ngx-cookie-consent-form',
  templateUrl: './consent-form.component.html'
})
export class ConsentFormComponent implements OnInit {

  private savedValue: any;
  public form!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'consent': new FormControl()
    });

    for(let cookie of document.cookie.split(';')) {
      if(cookie.trim().startsWith('cookie-consent')) {
        this.savedValue = JSON.parse(cookie.split('=')[1]);
      }
    }

    if(this.savedValue) {
      this.form.patchValue({ consent: this.savedValue.consent });
    }
  }

  onSubmit() {
    this.setConsent(this.form.value.consent);
  }

  private setConsent(consent: string) {
    const today = new Date();
    const cookieExpiry = new Date(today.setMonth(today.getMonth() + 12));
    document.cookie = 'cookie-consent={"consent":"'+consent+'","timestamp": "'+Date.now()+'"}; domain='+location.hostname+'; path=/; expires='+cookieExpiry+';';
  }
}
