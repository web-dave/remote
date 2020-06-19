import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../model/book.interface';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'foo-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    // this.book$ = this.service.getBook(this.route.snapshot.params.isbn);
    this.book$ = this.route.params.pipe(
      flatMap((params) => this.service.getBook(params.isbn))
    );
  }
  save(b: IBook) {
    console.log(b);
  }
}
