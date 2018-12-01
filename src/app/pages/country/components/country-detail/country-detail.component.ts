import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountriesService} from '../../../../core/services/countries.service';
import {LastVisitedCountryService} from '../../../../core/services/last-visited-country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  public country: any;

  constructor(private  activateRoute: ActivatedRoute,
              private  countryService: CountriesService,
              private lastVisit: LastVisitedCountryService) {

  }

  ngOnInit() {
    this.countryService.getCountryByName(this.activateRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.country = data[0];
        this.lastVisit.updatedDataSelection(this.country.flag);
      }, (err) => {
        console.log(err);
      });
  }

}
