import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public countries: any = [];
  public searchedResult: any = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data) => {
        console.log(data);
        this.countries = data.countries;
      }, () => {

      });
  }

  public searchCountry(event) {
    console.log(event);
    const searchedValue = event.target.value.toLowerCase();
   this.searchedResult = this.countries.filter((country) => {
      return country.name.toLowerCase().indexOf(searchedValue) > -1;
    });
  }
}
