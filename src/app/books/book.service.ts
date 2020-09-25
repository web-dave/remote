import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { delay, share, shareReplay } from 'rxjs/operators';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:4730/books/';
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

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url).pipe(shareReplay());
  }
  getBooks1(): Observable<IBook> {
    return from(this.books);
  }

  // getT(){
  //   return interval(1500)
  // }

  getBooksSync() {
    console.log('getBooks');
    return this.books;
  }
}
