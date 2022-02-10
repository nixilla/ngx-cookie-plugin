import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PolicyPageComponent } from "ngx-cookie-plugin";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cookie-policy', component: PolicyPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
