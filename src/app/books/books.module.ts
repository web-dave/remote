import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent],
  exports: [BooksComponent, BookListComponent],
  imports: [CommonModule, HttpClientModule, BooksRoutingModule],
  providers: [BookService],
})
export class BooksModule {}
