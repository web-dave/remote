import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss'],
})
export class MouseComponent implements OnInit {
  @Input() movedx;
  x: number = 0;
  y: number = 0;
  constructor() {}

  ngOnInit(): void {}

  onMouseMove(e: MouseEvent) {
    console.log('===>', e);
    this.x = e.x;
    this.y = e.y;
  }
}
