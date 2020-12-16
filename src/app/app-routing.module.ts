import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/buecher',
    pathMatch: 'full',
  },
  {
    path: 'buecher',
    loadChildren: () =>
      import('./books/books.module').then((es6m) => es6m.BooksModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((es6m) => es6m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
