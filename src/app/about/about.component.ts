import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  LL;
  fooooo = 'Hurbelwonz';
  user = {
    name: 'User',
    age: 88,
  };
  user$ = new BehaviorSubject(this.user);
  constructor(service: BookService) {
    service.getPing();
  }
  pong(e: string) {
    console.log(e);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.user$.next({
        name: 'user2',
        age: 33,
      });
    }, 1500);
  }
}
