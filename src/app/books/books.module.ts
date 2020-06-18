import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, DetailsComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
