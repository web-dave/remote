import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../ibook';

@Component({
  selector: 'fgh-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Output() bookselected = new EventEmitter<IBook>();
  @Input() book: IBook;

  foo: Hannes[] = ['Hannes kannes', 'Hannes, Wader'];

  constructor() {}

  ngOnInit(): void {}

  selectThisBook(e) {
    console.log(e);
    this.bookselected.emit(this.book);
  }
}

export type Hannes = 'Hannes, Wader' | 'Hannes kannes';
