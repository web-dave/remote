import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import { IBook } from './ibook';

@Component({
  selector: 'kxyjd-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  b = true;
  books$: Observable<IBook[]>;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }
}
