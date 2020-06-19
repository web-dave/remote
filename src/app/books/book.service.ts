import { Injectable } from '@angular/core';
import { IBook } from './model/book.interface';
import { Observable, of, interval } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url).pipe(shareReplay());
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + isbn);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.url + book.isbn, book);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }
  deleteBook(isbn: string): Observable<string> {
    return this.http.delete<string>(this.url + isbn);
  }
}
