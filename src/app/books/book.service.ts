import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [
    {
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software',
      isbn: '1',
    },
    {
      title: 'REST und HTTP',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
      isbn: '2',
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming',
      isbn: '3',
    },
  ];
  constructor() {}
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBookKeys(book: IBook): string[] {
    return Object.keys(book);
  }
}
