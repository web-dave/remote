import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  bookAttr: string[];
  moin: Subscription = new Subscription();
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.moin.add(
      this.service.getBooks().subscribe((data) => {
        this.books = data;
        this.bookAttr = this.service.getBookKeys(this.books[0]);
      })
    );
    this.moin.add(
      this.service.getPing().subscribe((ping) => {
        console.log('PING', ping);
      })
    );
  }

  ngOnDestroy() {
    this.moin.unsubscribe();
    this.moin.unsubscribe();
  }
}
