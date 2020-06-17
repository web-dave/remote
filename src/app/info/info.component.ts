import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  isHidden = false;
  x: number;
  y: number;
  constructor() {}

  ngOnInit(): void {}
  moueMove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
