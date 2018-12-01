import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountriesComponent} from './components/countries/countries.component';
import {CountryDetailComponent} from './components/country-detail/country-detail.component';
import {CountryRoutingModule} from './country-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  declarations: [CountriesComponent, CountryDetailComponent]
})
export class CountryModule {
}
