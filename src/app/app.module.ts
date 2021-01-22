import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoinComponent } from './moin/moin.component';

@NgModule({
  declarations: [AppComponent, NavComponent, WelcomeComponent, MoinComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
