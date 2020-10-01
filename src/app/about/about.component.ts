import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  fooooo = 'Hurbelwonz';
  constructor() {}
  pong(e: string) {
    console.log(e);
  }

  ngOnInit(): void {}
}
