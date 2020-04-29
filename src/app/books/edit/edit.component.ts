import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'fgh-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  book: IBook;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    this.service
      .getBook(this.route.snapshot.params.isbn)
      .subscribe((data) => (this.book = data));
  }
  saveBook() {
    this.service.updateBook(this.book).subscribe();
  }
}
