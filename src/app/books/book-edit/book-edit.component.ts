import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../ibook';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'kxyjd-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book$: Observable<IBook>;
  book: IBook;
  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params
    //   .pipe(flatMap((params) => this.service.getBook(params.isbn)))
    //   .subscribe((data) => (this.book = data));

    this.book$ = this.route.params.pipe(
      flatMap((params) => this.service.getBook(params.isbn))
    );
  }

  markus(e: string) {
    console.log(e);
    this.book.title = e.replace('a', '@');
  }

  save(b: IBook) {
    this.book$ = this.service.updateBook(b);
  }
}
