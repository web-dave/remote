import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kxyjd-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() myTitle: string;
  @Output() boom = new EventEmitter<string>();
  @Output() user = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  kaboom() {
    this.boom.emit('BÄHM');
    this.user.emit({ name: 'Klaus', job: 'Stablerfahrer' });
  }
  sendPing() {
    this.user.emit('kjyadhcösakjdh');
  }
}
