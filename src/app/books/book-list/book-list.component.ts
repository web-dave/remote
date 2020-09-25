import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  books$: Observable<IBook[]>;
  subs = new Subscription();
  constructor(public service: BookService) {}

  ngOnInit(): void {
    console.log('Init');

    this.books$ = this.service.getBooks();
  }

  ngOnDestroy() {
    console.log('Bye Bye');
    this.subs.unsubscribe();
  }
}
