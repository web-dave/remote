import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../model/book.interface';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'foo-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }
}
