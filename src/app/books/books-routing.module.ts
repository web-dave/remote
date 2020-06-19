import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { DetailsComponent } from './details/details.component';
import { BooksComponent } from './books/books.component';
import { LeaveGuard } from './leave.guard';
import { EditComponent } from './edit/edit.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        canDeactivate: [LeaveGuard],
      },
      {
        path: 'new',
        component: NewBookComponent,
      },
      {
        path: ':isbn',
        component: DetailsComponent,
      },
      {
        path: ':isbn/edit',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
