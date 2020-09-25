import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    NavigationComponent,
    TitleBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
