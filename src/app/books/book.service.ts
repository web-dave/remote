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

  // private books: IBook[] = [
  //   {
  //     title: 'Design Patterns',
  //     subtitle: 'Elements of Reusable Object-Oriented Software',
  //     isbn: '1',
  //   },
  //   {
  //     title: 'REST und HTTP',
  //     subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
  //     isbn: '2',
  //   },
  //   {
  //     title: 'Eloquent JavaScript',
  //     subtitle: 'A Modern Introduction to Programming',
  //     isbn: '3',
  //   },
  // ];
  // b = {
  //   title: 'Hurz',
  //   subtitle: 'Das Lammmmmmmmm',
  //   isbn: '4',
  // };
  // stream = new ReplaySubject<IBook[]>();
  constructor(private http: HttpClient) {
    // setTimeout(() => {
    //   console.log('!');
    //   this.stream.next([...this.books]);
    //   // this.books.push(this.b);
    // }, 300);
    // setInterval(() => {
    //   this.stream.next([...this.books]);
    // }, 500);
  }
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
}
