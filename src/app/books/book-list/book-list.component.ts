import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[];
  cols;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((data) => {
      this.books = data;
      this.cols = Object.keys(this.books[0]);
    });
  }
}
