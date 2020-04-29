import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:4730/books/';
  ob$ = interval(1500);
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>(this.url)
      .pipe(map((liste: IBook[]) => liste.filter((b) => b.isbn !== undefined)));
  }

  getFoo() {
    return this.ob$;
  }

  /**
   * @param isbn ist der primary key eines Buchs
   */
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + isbn);
    // .pipe(filter((b: IBook) => b.isbn !== undefined));
  }
}
