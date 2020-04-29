import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { PreviewComponent } from './preview/preview.component';
import { DetailsComponent } from './details/details.component';
import { PagesPipe } from './pages.pipe';
import { HighlightDirective } from './highlight.directive';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    PreviewComponent,
    DetailsComponent,
    PagesPipe,
    HighlightDirective,
    EditComponent,
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule],
})
export class BooksModule {}
