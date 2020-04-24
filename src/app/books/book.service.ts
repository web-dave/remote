import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable, of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  root = 'http://localhost:4730/books/';

  constructor(private http: HttpClient) {}
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root).pipe(
      map((data) =>
        data.map((b) => {
          b.id = 'Hurz';
          return b;
        })
      )
    );
    // return this.stream.asObservable();
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.root + isbn);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.root + book.isbn, book);
  }
  getNewBook(): IBook {
    return new IBook();
  }
}
