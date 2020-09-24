import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  books$: Observable<IBook[]>;
  subs = new Subscription()
  constructor( public service: BookService) { }

  ngOnInit(): void {
    this.books$ = this.service.getBooks();//.subscribe(data => this.books = data);
    this.subs.add(this.service.getBooks().subscribe());
    this.subs.add(this.service.getBooks1().subscribe(data => console.log(data)));
    // this.service.getT().subscribe(t => console.log(t));
  }

  ngOnDestroy(){
    console.log('Bye Bye');
    this.subs.unsubscribe()
  }

}
