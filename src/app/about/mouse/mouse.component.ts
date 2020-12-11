import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workshops-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss'],
})
export class MouseComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  constructor() {}

  ngOnInit(): void {}
  mouseHasMoved(e: MouseEvent) {
    console.log(e.x);
    this.x = e.x;
    this.y = e.y;
  }
}
