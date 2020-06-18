import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'REMOTE!';
  show = true;
  paff(e) {
    console.log(e);
  }
}
