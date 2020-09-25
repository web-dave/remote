import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'books-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  isbn;
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    // this.isbn = this.route.snapshot.params['isbn'];
    // this.book$ = this.service.getBookByIsbn(this.isbn);

    // this.route.params.subscribe(
    //   (params) => (this.book$ = this.service.getBookByIsbn(params.isbn))
    // );
    console.log(this.route);

    this.book$ = this.route.params.pipe(
      mergeMap((params) => this.service.getBookByIsbn(params.isbn))
    );
  }
}
