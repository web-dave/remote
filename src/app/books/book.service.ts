import { Injectable } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  getBooks(): IBook[] {
    console.log('Service');
    return [
      {
        title: 'Design Patterns',
        subtitle: 'Elements of Reusable Object-Oriented Software',
        isbn: 1,
      },
      {
        title: 'REST und HTTP',
        subtitle:
          'Entwicklung und Integration nach dem Architekturstil des Web',
        isbn: 2,
      },
      {
        title: 'Eloquent JavaScript',
        subtitle: 'A Modern Introduction to Programming',
        isbn: 3,
      },
    ];
  }
}
