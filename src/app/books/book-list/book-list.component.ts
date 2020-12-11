import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'workshops-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  constructor(public service: BookService) {}

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }
}
