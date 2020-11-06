import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  LL;
  fooooo = 'Hurbelwonz';
  user = {
    name: 'User',
    age: 88,
  };
  user$ = new BehaviorSubject(this.user);
  constructor(service: BookService, private cdr: ChangeDetectorRef) {
    service.getPing();
  }
  pong(e: string) {
    console.log(e);
  }

  transform(value) {
    console.log('method', value);

    return value.toUpperCase();
  }

  ngOnInit(): void {
    console.log('!!!');
    setInterval(() => {
      this.user = {
        ...this.user,
        age: 87,
      };
      this.cdr.detectChanges();
    }, 1500);
  }
}
