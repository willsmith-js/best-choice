import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Best choice';
  public showSideBar: Boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (this.router.url == '/') {
        this.showSideBar = false
      } else {
        this.showSideBar = true
      }
    });
  }
}
