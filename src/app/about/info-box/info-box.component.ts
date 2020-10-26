import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit, DoCheck {
  x: number = 0;
  y: number = 0;
  isHidden = false;
  constructor() {}
  ngDoCheck(): void {
    // console.log('Change!');
  }

  ngOnInit(): void {}
  hurz(e: MouseEvent) {
    console.log(e);
    this.x = e.x;
    this.y = e.y;
  }
}
