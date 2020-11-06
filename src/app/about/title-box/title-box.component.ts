import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

/**
 *
 * <app-title-box [title]="variable"></app-title-box>
 *
 */

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBoxComponent implements OnInit, OnChanges {
  @Input() title: any = {};
  user;
  @Output() ping = new EventEmitter<string>();
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  inp(e) {
    this.ping.emit(e.target.value);
  }
  ngOnInit(): void {
    // dispatch(ActionName({...title, age: 77}))
    // this.title.subscribe((data) => {
    //   this.user = data;
    //   this.cdr.markForCheck();
    // });
  }
}
