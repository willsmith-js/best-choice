import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {HomeComponent} from './pages/home/home.component';
import {NewsModule} from './pages/news/news.module';


const appRoute: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'news',
    loadChildren: './pages/news/news.module#NewsModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
