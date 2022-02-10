import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Location } from '@angular/common'

import { CookieService } from "../cookie.service";

@Component({
  selector: 'ngx-cookie-consent-form',
  templateUrl: './consent-form.component.html'
})
export class ConsentFormComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private cookieService: CookieService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'consent': new FormControl()
    });

    this.form.patchValue({ consent: this.cookieService.getCurrentValue() });
  }

  onSubmit() {
    this.cookieService.setConsent(this.form.value.consent);
    this.location.back();
  }
}
