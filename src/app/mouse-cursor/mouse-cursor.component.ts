import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'kxyjd-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss'],
})
export class MouseCursorComponent implements OnInit {
  x: number;
  y: number;
  constructor() {}

  ngOnInit(): void {}

  move(e: MouseEvent) {
    // console.log(e);
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
