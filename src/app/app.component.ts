import { Component, AfterViewChecked, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fgh-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'remote';
}
