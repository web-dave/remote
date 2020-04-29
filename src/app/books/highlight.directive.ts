import {
  Directive,
  ElementRef,
  OnChanges,
  Input,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { IBook } from './ibook';

@Directive({
  selector: '[fghHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() fghHighlight: IBook;
  btn: HTMLButtonElement = document.createElement('button');
  constructor(private elm: ElementRef) {
    this.elm.nativeElement.appendChild(this.btn);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.btn.innerText = this.fghHighlight.isbn;
  }
  @HostListener('mouseenter') hi() {
    this.elm.nativeElement.classList.add('highlight');
  }
  @HostListener('mouseleave') ho() {
    this.elm.nativeElement.classList.remove('highlight');
  }
}
