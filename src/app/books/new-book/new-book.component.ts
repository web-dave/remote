import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'foo-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
  form: FormGroup;
  publisher: FormGroup;
  foo: AbstractControl;
  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.publisher = this.builder.group({
      name: [''],
      url: [''],
    });
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: [''],
      isbn: [''],
      abstract: [''],
      numPages: [0],
      author: [''],
      publisher: this.publisher,
      cover: [''],
    });
    this.form.get('isbn').setValue(123456789);
    this.form.patchValue({
      subtitle: 'Hurz',
      abstract: 'Hurbelwonz',
    });
    this.form.get('isbn').valueChanges.subscribe((data) => console.log(data));
  }
  save() {
    this.service.createBook(this.form.value).subscribe();
  }
}
