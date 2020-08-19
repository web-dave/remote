import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  pong() {
    this.ping.emit('Mooooin!');
  }
}
