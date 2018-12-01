import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastVisitedCountryService {

  private dataSource = new BehaviorSubject<any>('');
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(data) {
    this.dataSource.next(data);
  }
}
