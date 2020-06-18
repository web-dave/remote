import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { IBook } from '../model/book.interface';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'foo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    // this.book$ = this.service.getBook(this.route.snapshot.params.isbn);
    this.book$ = this.route.params.pipe(
      flatMap((params) => this.service.getBook(params.isbn))
    );
  }
}
