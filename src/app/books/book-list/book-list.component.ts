import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../ibook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fgh-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(
    public service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((data) => (this.books = data));
  }

  moinBook(e: IBook) {
    console.log(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
