import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'remote';
  kjh = 'qwertz';
  constructor() {
    setTimeout(() => {
      this.title = 'MOIN!';
    }, 1500);
  }
}
