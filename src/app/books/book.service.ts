import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { IBook } from './ibook';

@Injectable()
export class BookService {
  private url = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  saveBook(b: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url, b);
  }

  updateBook(b: IBook): Observable<IBook> {
    return of(true).pipe(
      delay(8000),
      flatMap(() => this.http.put<IBook>(this.url + b.isbn, b))
    );
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + isbn);
  }

  getBookKeys(book: IBook): string[] {
    return Object.keys(book);
  }

  getPing() {
    return interval(1500);
  }
}
