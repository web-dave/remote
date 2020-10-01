import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getBookKeys(book: IBook): string[] {
    return Object.keys(book);
  }

  getPing() {
    return interval(1500);
  }
}
