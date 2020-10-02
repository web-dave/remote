import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  LL;
  fooooo = 'Hurbelwonz';
  constructor(service: BookService) {
    service.getPing();
  }
  pong(e: string) {
    console.log(e);
  }

  ngOnInit(): void {
    import('node_modules/leaflet/dist/leaflet.js').then((m) => {
      window['L'] = m.default;
      const map = window['L'].map('map', {
        center: [51.505, -0.09],
        zoom: 13,
      });
    });
  }
}
