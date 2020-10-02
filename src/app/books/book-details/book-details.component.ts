import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.route.params.subscribe((params) => {
      this.book = this.service.getBook(params.isbn);
      console.log('observable', params);
    });
  }
}
