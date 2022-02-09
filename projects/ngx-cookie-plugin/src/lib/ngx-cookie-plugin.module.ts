import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ConsentFormComponent } from './consent-form/consent-form.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [
    ConsentFormComponent,
    PolicyPageComponent,
    BarComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ConsentFormComponent,
    PolicyPageComponent,
    BarComponent
  ]
})
export class NgxCookiePluginModule { }
