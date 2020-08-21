import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
  newBookForm: FormGroup;
  check = new FormControl(false);
  constructor(
    private builder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newBookForm = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: [''],
      isbn: [''],
      abstract: [''],
      numPages: [0],
      author: [''],
      publisher: this.builder.group({
        name: [''],
        url: [''],
      }),
      cover: [''],
    });
    this.check.valueChanges.subscribe((data) => {
      if (data) {
        this.newBookForm.get('publisher').disable();
      } else {
        this.newBookForm.get('publisher').enable();
      }
    });
    this.newBookForm.get('publisher').patchValue({
      name: 'Peter',
      url: 'lkjshdlKJ',
    });
    this.newBookForm
      .get('publisher')
      .get('name')
      .valueChanges.subscribe((name) => console.log(name));
  }

  saveBook() {
    if (this.newBookForm.valid) {
      console.log('Yeah!');
      this.service
        .createBook(this.newBookForm.value)
        .subscribe((data) =>
          this.router.navigate(['..', data.isbn], { relativeTo: this.route })
        );
    } else {
      console.log('Oh Nooooooo!');
    }
  }
}
