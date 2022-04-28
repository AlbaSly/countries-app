import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ByRegionalBlocComponent } from './pages/by-regional-bloc/by-regional-bloc.component';

import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearcherComponent } from './components/searcher/searcher.component';



@NgModule({
  declarations: [
    ByCountryComponent,
    ByRegionComponent,
    ByCapitalComponent,
    ByRegionalBlocComponent,
    ViewCountryComponent,
    CountryTableComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ByCountryComponent,
    ByRegionComponent,
    ByCapitalComponent,
    ByRegionalBlocComponent,
    ViewCountryComponent
  ]
})
export class CountryModule { }
