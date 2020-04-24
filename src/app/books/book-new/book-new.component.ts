import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { BookService } from '../book.service';
import { IBook } from '../ibook';
import { isbnValidator } from './validators';

@Component({
  selector: 'kxyjd-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  newbookform: FormGroup;
  book = {
    title: 'Design P@tternse',
    subtitle: 'Elements of Reusable Object-Oriented Software',
    isbn: null,
    abstract: 'Capturing ',
    numPages: 395,
    author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    publisher: {
      name: 'Addison-Wesley',
      url: 'http://www.addison-wesley.de/',
    },
    cover: 'http://localhost:4730/covers/978-0-20163-361-0.jpg',
  };
  ctrls: string[];
  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.newbookform = this.builder.group({
      title: [this.book.title, [Validators.required]],
      abstract: [this.book.abstract],
      client: [false],
      isbn: [null, [isbnValidator]],
    });

    const publisher = this.builder.group({
      url: [''],
      name: [''],
    });
    // this.newbookform.addControl('publisher', publisher);
    // this.newbookform.get('publisher').get('url').setValue('me.mo');
    this.newbookform.addControl('subtitle', new FormControl());
    this.ctrls = this.getControls();

    this.newbookform
      .get('client')
      .valueChanges.subscribe((data) => this.role(data));
  }

  getControls(): string[] {
    console.log('!');
    const ctrls = this.newbookform.controls;
    return Object.keys(ctrls);
  }

  role(e) {
    console.log(e);
    if (!e) {
      this.newbookform.addControl('role', new FormControl('Kunde'));
    } else {
      this.newbookform.removeControl('role');
    }
    this.ctrls = this.getControls();
  }

  save() {
    const b = {
      ...this.book,
      ...this.newbookform.value,
    };
    console.log(b);
    this.service.createBook(b).subscribe();
  }
}
