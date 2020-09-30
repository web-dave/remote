import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  hans = [12, 3, 4, 2, 3, 4, 5, 3, 9, 222, 34, 45, 5];
  constructor() {}

  ngOnInit(): void {}
}
