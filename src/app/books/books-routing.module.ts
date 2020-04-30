import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { DetailsComponent } from './details/details.component';
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
        component: DetailsComponent,
      },
      {
        path: ':isbn/edit',
        component: EditComponent,
      },
    ],
  },
  {
    path: '**',
    component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
