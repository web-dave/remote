import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'workshops-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const publisher = this.formBuilder.group({
      name: [''],
      url: [''],
    });
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      subtitle: [''],
      isbn: [null, [Validators.required]],
      abstract: [''],
      numPages: [0],
      author: [''],
      publisher: publisher,
      cover: [''],
    });
    this.bookForm.get('isbn').setValue('123-456-465-456');
  }
  save() {
    console.log(this.bookForm.value);
  }
}
