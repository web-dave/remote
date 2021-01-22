import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'moin-moin',
  template: `
    <div>
      <label>{{ name }}</label>
      <button (click)="hi()">^5</button>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MoinComponent implements OnInit {
  @Input() name: string;
  @Output() highfive = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  hi() {
    this.highfive.emit(`Hi, My name is ${this.name}!`);
  }
}
