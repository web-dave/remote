import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'workshops-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) => this.service.getBook(params.isbn))
    );
  }
  save(b: IBook) {
    console.log(b);
    this.service.updateBook(b).subscribe();
  }
}
