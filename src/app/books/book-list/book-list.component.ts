import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = [
    {
      title: "Design Patterns",
      subtitle: "Elements of Reusable Object-Oriented Software",
      isbn: "1"
    },
    {
      title: "REST und HTTP",
      subtitle: "Entwicklung und Integration nach dem Architekturstil des Web",
      isbn: "2"
    },
    {
      title: "Eloquent JavaScript",
      subtitle: "A Modern Introduction to Programming",
      isbn:"3"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
