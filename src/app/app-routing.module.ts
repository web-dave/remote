import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  NoPreloading,
} from '@angular/router';
import { PreLoad } from './preLoad';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/books',
  //   pathMatch: 'full',
  // },
  {
    path: 'buch',
    data: {
      preload: true,
      delay: 1000,
    },
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: {
      preload: true,
      delay: 3000,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreLoad,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
