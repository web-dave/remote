import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mate';
  onEvent(e: string) {
    console.log(e);
  }
  knft(e: MouseEvent) {
    console.log(e);
  }
}
