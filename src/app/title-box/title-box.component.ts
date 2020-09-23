import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'books-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit, OnChanges {
  @Input() boxTitle: string;
  @Output() ping = new EventEmitter<string>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('--->',changes)
  }

  ngOnInit(): void {
  }

  sendPing(e){
    console.log(e);
    this.ping.emit('öskdjvhösadhfbv')
  }

}
