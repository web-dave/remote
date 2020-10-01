import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  moin: Observable<number>;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.books = this.service.getBooks();

    this.moin = this.service.getPing();
  }
}
