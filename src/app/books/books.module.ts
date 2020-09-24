import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BooksComponent, BookListComponent],
  exports: [BooksComponent, BookListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule,
  ]
})
export class BooksModule { }
