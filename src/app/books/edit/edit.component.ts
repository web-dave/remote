import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.route);
    console.log(this.route.snapshot.params);
    this.route.params.subscribe((params) => {
      this.book$ = this.service.getBook(params.isbn);
    });
  }
  save(b: IBook) {
    this.service.updateBook(b).subscribe();
  }
}
