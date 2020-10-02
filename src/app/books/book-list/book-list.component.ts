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
  book: any = {
    title: 'Design Patterns',
    subtitle: 'Elements of Reusable Object-Oriented Software',
    isbn: '978-0-20163-361-0',
    abstract:
      'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
    numPages: 395,
    author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    publisher: {
      name: 'Addison-Wesley',
      url: 'http://www.addison-wesley.de/',
    },
    cover: 'http://localhost:4730/covers/978-0-20163-361-0.jpg',
  };
  constructor(private service: BookService) {
    setInterval(() => {
      this.book = 1;
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
