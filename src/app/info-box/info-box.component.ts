import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  isHidden = false;
  x: number
  y: number
  constructor() { }

  ngOnInit(): void {
  }

  onMouseMoved(e:MouseEvent){
    console.log(e)
    this.x = e.x;
    this.y = e.y;
  }

}
