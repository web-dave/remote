import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kxyjd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'remote';
  i = 0;
  ngOnInit(): void {}
  rec(e: string) {
    console.log(e);
  }
}
