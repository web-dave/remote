import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'remote';
  i = 0;
  go = false;
  constructor() {
    // setInterval(() => {
    //   this.i++;
    //   this.fooooo = 'Hurbelwonz' + this.i;
    // }, 1500);
  }
}
