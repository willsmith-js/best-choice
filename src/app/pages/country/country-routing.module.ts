import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CountriesComponent} from './components/countries/countries.component';
import {CountryDetailComponent} from './components/country-detail/country-detail.component';
import {CountryResolverService} from '../../core/services/country-resolver.service';

const countryRouter: Routes = [
  {
    path: '',
    component: CountriesComponent,
    resolve: {
      countries: CountryResolverService
    }
  },
  {
    path: ':id',
    component: CountryDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(countryRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class CountryRoutingModule {
}
