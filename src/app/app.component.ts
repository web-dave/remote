import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'remote';
  kjh = 'qwertz';
  book;
  constructor() {
    setTimeout(() => {
      this.title = 'MOIN!';
    }, 1500);
  }

  paff(e) {
    console.log(e);
  }
}
