import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fgh-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss'],
})
export class PublisherComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() name: string;
  myForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
      url: new FormControl(),
    });
    this.form.addControl(this.name, this.myForm);
  }
}
