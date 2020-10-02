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
  i: any = 0;
  constructor(private service: BookService) {
    setInterval(() => {
      this.i = 1;
    }, 1500);
  }

  ngOnInit(): void {
    this.books = this.service.getBooks();

    this.moin = this.service.getPing();
  }
  getKeys(b) {
    console.log(b);
    return b;
  }
  add(a, b) {
    return a + b;
  }
}
