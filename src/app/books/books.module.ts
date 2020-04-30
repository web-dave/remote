import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { PreviewComponent } from './preview/preview.component';
import { DetailsComponent } from './details/details.component';
import { PagesPipe } from './pages.pipe';
import { HighlightDirective } from './highlight.directive';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PublisherComponent } from './publisher/publisher.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    PreviewComponent,
    DetailsComponent,
    PagesPipe,
    HighlightDirective,
    EditComponent,
    NewComponent,
    PublisherComponent,
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BooksModule {}
