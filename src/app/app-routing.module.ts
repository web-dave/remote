import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((es6m) => es6m.BooksModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
