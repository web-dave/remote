import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../ibook';
import { flatMap, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'fgh-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  book$: Observable<IBook>;
  sub: Subscription;
  jhghjg: number = 0;
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.jhghjg = 4711;
    }, 1500);
    // console.log(this.route.snapshot.params);

    // OK
    // this.route.params.subscribe((params) =>
    //   this.service.getBook(params.isbn).subscribe((data) => (this.book = data))
    // );

    // Besser
    this.book$ = this.route.params.pipe(
      tap((params) => console.log(params)),
      flatMap((params) => this.service.getBook(params.isbn))
    );
    // .subscribe((data) => (this.book = data));

    // this.sub = this.service.getFoo().subscribe((data) => (this.jhghjg = data));
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
  transform(value: number, prefix: string = 'Seitenzahl'): string {
    console.log('Methode', value);
    return `${prefix}: ${value}`;
  }
}
