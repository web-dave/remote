import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseComponent } from './mouse/mouse.component';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  declarations: [AppComponent, TopNavComponent, InfoBoxComponent, MouseComponent, TitleBoxComponent],
  imports: [BrowserModule, AppRoutingModule, BooksModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
