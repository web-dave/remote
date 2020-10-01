import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  inp(e) {
    this.ping.emit(e.target.value);
  }
  ngOnInit(): void {}
}
