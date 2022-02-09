import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxCookiePluginModule } from "ngx-cookie-plugin";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCookiePluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
