import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LastVisitedCountryService} from '../../core/services/last-visited-country.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lastVisitedImageUrl: string = '';

  constructor(private translate: TranslateService,
              private lastVisit: LastVisitedCountryService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit() {
    this.lastVisit.data
      .subscribe((data) => {
        this.lastVisitedImageUrl = data;
      });
  }

}
