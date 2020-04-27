import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentChecked,
  AfterViewChecked,
  Input,
} from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../book.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'kxyjd-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() books: IBook[];
  books$: Observable<IBook[]>;
  foo = 1;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
    // setInterval(() => {
    //   this.foo = 1;
    // }, 1500);
  }

  addSomeFun(value: number) {
    console.log(value);
    return value + ' 🦄';
  }
}
// console.log(this.sub);
// sub: Subscription;
// foo = 'bar';
// end = new Subject();

// ngOnDestroy(): void {
//   this.end.next(1);
//   console.log(this.sub);
// }
// this.sub = this.service
//   .getBooks()
//   .pipe(takeUntil(this.end))
//   .subscribe(
//     (data) => {
//       console.log('data', data);
//       this.books = data;
//     },
//     (err) => console.error(err),
//     () => console.log('DONE!')
//   );
