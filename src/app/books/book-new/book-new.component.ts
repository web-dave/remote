import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookService } from '../book.service';

@Component({
  selector: 'workshops-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  bookForm: FormGroup;
  end$ = new Subject();
  constructor(private formBuilder: FormBuilder, private service: BookService) {}

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
    this.bookForm.get('numPages').setValue(4711);
  }

  save() {
    console.log(this.bookForm.value);
    this.service
      .createBook(this.bookForm.value)
      .pipe(takeUntil(this.end$))
      .subscribe();
  }

  ngOnDestroy() {
    console.log(this);
    this.end$.next(1);
  }
}
