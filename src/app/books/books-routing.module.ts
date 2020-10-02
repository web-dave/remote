import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from '../leave.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './book/books.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'new',
        component: NewComponent,
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
        canDeactivate: [LeaveGuard],
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
