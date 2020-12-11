import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'workshops-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() tilde: string;
  @Output() ping = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendPing() {
    this.ping.emit(this.tilde);
  }
}
