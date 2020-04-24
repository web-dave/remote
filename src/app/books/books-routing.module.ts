import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { StayGuard } from './stay.guard';
import { BookEditComponent } from './book-edit/book-edit.component';

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
        path: ':isbn',
        component: BookDetailsComponent,
        canDeactivate: [StayGuard],
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
