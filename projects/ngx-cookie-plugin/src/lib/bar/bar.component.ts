import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { CookieService } from "../cookie.service";
import { NgxCookieConfig } from "../ngx-cookie-config";

@Component({
  selector: 'ngx-cookie-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit, OnDestroy {

  barHidden: boolean = false;

  private subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    public config: NgxCookieConfig
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.config.cookiePolicyRoute === event.urlAfterRedirects) {
          this.barHidden = true;
        } else {
          this.barHidden = this.cookieService.hasValue();
        }
      }
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  accept() {
    this.barHidden = true;
    this.cookieService.setConsent('yes');
  }

  reject() {
    this.barHidden = true;
    this.cookieService.setConsent('no');
  }


  manage() {

    this.barHidden = true;

    if (this.config.cookiePolicyRoute) {
      this.router.navigateByUrl(this.config.cookiePolicyRoute);
    }

  }
}
