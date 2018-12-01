import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';


@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  public getAllCountries() {
    return this.http.get(`${environment.backEndEndPoint}all`);
  }
  // https://restcountries.eu/rest/v2/name/{name}
  public getCountryByName(name) {
    return this.http.get(`${environment.backEndEndPoint}name/${name}`);
  }
}
