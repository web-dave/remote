import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  isHidden = false;
  constructor() {}

  ngOnInit(): void {}
  hurz(e: MouseEvent) {
    console.log(e);
    this.x = e.x;
    this.y = e.y;
  }
}
