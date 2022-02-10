# Cookie Plugin for Angular projects

Provides:
* Cookie bar to display the notification about cookies being used
* Cookie consent form which saves the choice to `cookie-consent` cookie
* Optional cookie `PolicyPageComponent` which can be used to hook up to angular routing.

# Installation

`npm i -S @nixilla/ngx-cookie-plugin`

Then in your `app.component.html` above `<router-outlet></router-outlet>` add:

```xml
<ngx-cookie-bar></ngx-cookie-bar>
<router-outlet></router-outlet>
```

# Configuration

Configure in `app.module.ts` with:

```ts
imports: [
  NgxCookiePluginModule.forRoot({
    cookiePolicyRoute: '/cookie-policy',
    showAcceptBtn: true,
    showRejectBtn: false,
    showLearnMoreBtn: true
  })
]
```

and make sure the `/cookie-policy` page is available in `app-routing.module.ts`: 

```ts
import { PolicyPageComponent } from "ngx-cookie-plugin"; // you don't have to use this component

const routes: Routes = [
  { path: 'cookie-policy', component: PolicyPageComponent }
];
```

