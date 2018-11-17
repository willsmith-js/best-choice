import {NgModule} from '@angular/core';
import {MomentModule} from 'ngx-moment';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {AppComponent} from './components/root/app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MomentModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
