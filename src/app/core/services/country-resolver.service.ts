import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

import {CountriesService} from './countries.service';

@Injectable()
export class CountryResolverService implements Resolve<any> {

  constructor(private countriesService: CountriesService) { }

  resolve() {
    return this.countriesService.getAllCountries()
  }
}
