import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'workshops-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  bookForm: FormGroup;
  end$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) {}

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
    const user = new FormGroup({});
    this.bookForm.addControl('user', user);
    user.addControl('user1', new FormControl('User Uno'));
    (this.bookForm.get('user') as FormGroup).addControl(
      'user2',
      new FormControl('User Dosssssss')
    );
    this.bookForm
      .get('isbn')
      .valueChanges.subscribe((data) => console.log(data));
  }

  save() {
    console.log(this.bookForm.value);
    this.service
      .createBook(this.bookForm.value)
      .pipe(takeUntil(this.end$))
      .subscribe((data: IBook) =>
        this.router.navigate(['..', data.isbn], {
          relativeTo: this.route,
        })
      );
  }

  ngOnDestroy() {
    console.log(this);
    this.end$.next(1);
  }
}
