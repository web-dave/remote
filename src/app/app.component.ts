import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements DoCheck {
  title = 'remote';
  i = 0;
  go = false;
  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.title = 'Robotron';
      this.cdr.detectChanges();
      //   this.i++;
      //   this.fooooo = 'Hurbelwonz' + this.i;
    }, 1500);
  }

  ngDoCheck() {
    // console.log('??');
  }
}
