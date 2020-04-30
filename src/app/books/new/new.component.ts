import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs/operators';
import { IsbnValidator, IsbnAsyncValidator } from './isbn.validator';

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

  addCover(e) {
    if (e.target.checked) {
      this.form.addControl('cover', new FormControl('foo'));
    } else {
      this.form.removeControl('cover');
    }
  }
}
