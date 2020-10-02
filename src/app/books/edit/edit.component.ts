import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  book$: Observable<IBook>;
  sub = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.route);
    console.log(this.route.snapshot.params);
    this.route.params.subscribe((params) => {
      this.book$ = this.service.getBook(params.isbn);
    });
  }
  save(b: IBook) {
    this.sub.add(
      this.service.updateBook(b).subscribe(
        (data) =>
          this.router.navigate(['..', data.isbn], { relativeTo: this.route }),
        (err) => console.error(err)
      )
    );
  }
}
