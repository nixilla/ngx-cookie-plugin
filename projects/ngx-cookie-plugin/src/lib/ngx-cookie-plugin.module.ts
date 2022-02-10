import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ConsentFormComponent } from './consent-form/consent-form.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { BarComponent } from './bar/bar.component';
import { NgxCookieConfig } from "./ngx-cookie-config";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    ConsentFormComponent,
    PolicyPageComponent,
    BarComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ConsentFormComponent,
    PolicyPageComponent,
    BarComponent
  ]
})
export class NgxCookiePluginModule {

  constructor(@Optional() @SkipSelf() parentModule?: NgxCookiePluginModule) {
    if (parentModule) {
      throw new Error('NgxCookiePluginModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: NgxCookieConfig): ModuleWithProviders<NgxCookiePluginModule> {
    return {
      ngModule: NgxCookiePluginModule,
      providers: [
        { provide: NgxCookieConfig, useValue: config }
      ]
    };
  }
}
