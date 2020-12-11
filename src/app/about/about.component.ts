import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = 'ABOUT';
  constructor() {}

  ngOnInit(): void {}

  pong(e: string) {
    console.log('pong ---->', e);
  }
}
