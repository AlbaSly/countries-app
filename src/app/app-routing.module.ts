import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ByCapitalComponent } from "./country/pages/by-capital/by-capital.component";
import { ByCountryComponent } from "./country/pages/by-country/by-country.component";
import { ByRegionComponent } from "./country/pages/by-region/by-region.component";
import { ByRegionalBlocComponent } from "./country/pages/by-regional-bloc/by-regional-bloc.component";
import { ViewCountryComponent } from "./country/pages/view-country/view-country.component";

import { NotFoundComponent } from "./shared/not-found/not-found.component";

const ROUTES: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'regional-bloc',
    component: ByRegionalBlocComponent
  },
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'country/:code',
    component: ViewCountryComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
