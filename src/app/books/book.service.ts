import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.baseUrl);
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.baseUrl + isbn);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.baseUrl + book.isbn, book);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.baseUrl, book);
  }
}
