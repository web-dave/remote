import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fgh-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() book;
  @Output() bookselected = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectThisBook(e) {
    console.log(e);
    this.bookselected.emit(this.book);
  }
}
