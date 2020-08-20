import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  cols;
  sub: Subscription;
  constructor(private service: BookService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.service.getBooks().subscribe(
      (data) => this.setBooks(data),
      (err) => console.error(err),
      () => console.info('DONE!')
    );
  }

  setBooks(b) {
    this.books = b;
    this.cols = Object.keys(b[0]);
  }
}
