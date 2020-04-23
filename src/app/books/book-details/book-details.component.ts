import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../ibook';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'kxyjd-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook>;
  book = 'Hallo';
  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    // this.book$ = this.service.getBook(this.route.snapshot.params.isbn);
    console.log('Moin');
    this.route.params.subscribe(
      (params) => (this.book$ = this.service.getBook(params.isbn))
    );

    this.book$ = this.route.params.pipe(
      flatMap((params) => this.service.getBook(params.isbn))
    );
  }
}
