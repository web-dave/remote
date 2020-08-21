import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    NewBookComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
  exports: [BooksComponent, BookListComponent],
})
export class BooksModule {}
