import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'workshops-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  sub: Subscription = new Subscription();
  end$ = new Subject<number>();
  constructor(public service: BookService) {}

  ngOnInit(): void {
    this.sub = this.service
      .getBooks()
      .pipe(takeUntil(this.end$))
      .subscribe((data) => (this.books = data));
  }
  ngOnDestroy() {
    this.end$.next(1);
  }
}
