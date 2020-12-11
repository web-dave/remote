import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workshops-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  isHidden = true;
  constructor() {}

  ngOnInit(): void {}
  getText() {
    // console.log('ljhgxv');
    return 'info-box works!';
  }
}
