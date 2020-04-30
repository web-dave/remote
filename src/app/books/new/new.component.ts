import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs/operators';
import { IsbnValidator } from './isbn.validator';

@Component({
  selector: 'fgh-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  form: FormGroup;
  constructor(
    private builder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: [''],
      abstract: ['', [Validators.required, Validators.minLength(6)]],
      numPages: [0],
      author: [''],
      isbn: ['', [IsbnValidator]],
      publisher: this.builder.group({
        name: [''],
        url: [''],
      }),
      cover: [''],
    });
    console.log(this.form.value);
  }
  saveBook() {
    this.service
      .createBook(this.form.value)
      .pipe(retry(2))
      .subscribe(
        (data) => this.router.navigate(['..'], { relativeTo: this.route }),
        (err) => console.error('ERROR', err)
      );
  }
}
