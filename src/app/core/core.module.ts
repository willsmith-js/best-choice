import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CountryResolverService} from './services/country-resolver.service';
import {CountriesService} from './services/countries.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CountriesService,
    CountryResolverService
  ]
})
export class CoreModule { }
