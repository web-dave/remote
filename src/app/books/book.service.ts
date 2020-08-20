import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  restroot = 'http://localhost:4730/books/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.restroot);
    // .pipe(
    //   tap((data) => console.log(data)),
    //   delay(3000)
    // );
  }
  get_Books(): Observable<IBook[]> {
    const books: IBook[] = [
      // {
      //   title: 'Design Patterns',
      //   subtitle: 'Elements of Reusable Object-Oriented Software',
      //   isbn: 1,
      // },
      // {
      //   title: 'REST und HTTP',
      //   subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
      //   isbn: 2,
      // },
      // {
      //   title: 'Eloquent JavaScript',
      //   subtitle: 'A Modern Introduction to Programming',
      //   isbn: 3,
      // },
    ];
    return of(books).pipe(
      tap((data) => console.log(data)),
      delay(3000)
    );
  }
}
