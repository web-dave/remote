import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { BooksModule } from './books/books.module';
import { NavComponent } from './nav/nav.component';
import { InfoComponent } from './info/info.component';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfoComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
