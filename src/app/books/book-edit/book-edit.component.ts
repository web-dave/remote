import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'workshops-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  book$: Observable<IBook>;
  end$ = new Subject();
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) => this.service.getBook(params.isbn))
    );
  }
  save(b: IBook) {
    console.log(b);
    this.service
      .updateBook(b)
      .pipe(takeUntil(this.end$))
      .subscribe(() =>
        this.router.navigate(['..'], {
          relativeTo: this.route,
        })
      );
  }
  ngOnDestroy() {
    this.end$.next(1);
  }
}
