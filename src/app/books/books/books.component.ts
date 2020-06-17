import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  shelf;
  constructor() {}

  ngOnInit(): void {}
  moin(e) {
    console.log(e);
    this.shelf = 'Hobbies';
  }
}
