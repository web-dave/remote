import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { KeysPipe } from './keys.pipe';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailsComponent, KeysPipe, EditComponent],
  exports: [BooksComponent, BookListComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
