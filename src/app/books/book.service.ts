import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { delay, share, shareReplay } from 'rxjs/operators';
import { IBook } from './ibook';

@Injectable()
export class BookService {
  url = 'http://localhost:4730/books/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url).pipe(shareReplay());
  }

  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + isbn);
  }
}
