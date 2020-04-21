import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // als Subject zeigen
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
  b = {
    title: 'Hurz',
    subtitle: 'Das Lammmmmmmmm',
    isbn: '4',
  };
  constructor() {
    setTimeout(() => {
      console.log('!');
      this.books.push(this.b);
    }, 3000);
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
}
