import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'fgh-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((data) => (this.books = data));
  }

  moinBook(e) {
    console.log(e);
  }
}
