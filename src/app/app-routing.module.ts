import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadDelayed } from './PreloadDelayed.stategy';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
    data: {
      preload: true,
      delay: 3000,
    },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: {
      preload: true,
      delay: 2000,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadDelayed,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
