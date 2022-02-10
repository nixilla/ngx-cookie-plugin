import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxCookiePluginModule } from "ngx-cookie-plugin";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxCookiePluginModule.forRoot({
      cookiePolicyRoute: '/cookie-policy',
      showAcceptBtn: true,
      showRejectBtn: false,
      showLearnMoreBtn: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
