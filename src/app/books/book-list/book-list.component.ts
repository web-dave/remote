import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'workshops-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  searchStr: string;

  constructor(public service: BookService) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }
}
