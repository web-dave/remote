import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'foo-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() teitel: string;
  @Output() piff = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  makePiff() {
    this.piff.emit(this.teitel);
  }
}
