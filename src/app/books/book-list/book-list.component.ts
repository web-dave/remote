import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../book.service';

@Component({
  selector: 'kxyjd-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private service: BookService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.service.getBooks().subscribe(
        (data) => (this.books = data),
        (err) => console.error(err),
        () => console.log('DONE!')
      );
    }, 1500);
  }
}
