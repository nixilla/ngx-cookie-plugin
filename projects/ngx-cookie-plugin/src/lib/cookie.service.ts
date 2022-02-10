import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  hasValue(): boolean {
    for(let cookie of document.cookie.split(';')) {
      if(cookie.trim().startsWith('cookie-consent')) {
        return true;
      }
    }

    return false;
  }

  getCurrentValue(): string {

    for(let cookie of document.cookie.split(';')) {
      if(cookie.trim().startsWith('cookie-consent')) {
        return JSON.parse(cookie.split('=')[1]).consent;
      }
    }

    return 'no';
  }

  setConsent(consent: string): void {
    const today = new Date();
    const cookieExpiry = new Date(today.setMonth(today.getMonth() + 12));
    document.cookie = 'cookie-consent={"consent":"' + consent + '","timestamp": "' + Date.now() + '"}; domain=' + location.hostname + '; path=/; expires=' + cookieExpiry + ';';
  }


}
