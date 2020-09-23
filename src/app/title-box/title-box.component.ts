import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'books-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit, OnChanges {
  @Input() boxTitle: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('--->',changes);
    
  }

  ngOnInit(): void {
  }

}
