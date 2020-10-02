import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  fooooo = 'Hurbelwonz';
  constructor(service: BookService) {
    service.getPing();
  }
  pong(e: string) {
    console.log(e);
  }

  ngOnInit(): void {}
}
