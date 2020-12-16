import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchPipe } from './search.pipe';
import { DetailsComponent } from './details/details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    SearchPipe,
    DetailsComponent,
    BookEditComponent,
  ],
  exports: [BooksComponent, BookListComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule],
})
export class BooksModule {}
