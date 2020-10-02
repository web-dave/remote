import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  bookForm: FormGroup;
  userForm: FormGroup;

  users = [];
  user1 = { name: '', age: '' };
  user2 = { name: '', age: '' };
  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', []],
      abstract: ['', []],
      numPages: [0, []],
      author: ['', []],

      cover: ['', []],
    });
    const publisher = this.builder.group({
      name: ['', []],
      url: ['', []],
    });
    this.userForm = this.builder.group({});
    this.bookForm.addControl('publisher', publisher);
    this.users.forEach((u, i) => console.log(u, i));
    this.addUser(this.user1);
  }
  save() {
    this.service.saveBook(this.bookForm.value).subscribe();
  }
  addUser(user) {
    this.users.push(user);
    this.users.forEach((u, i) => console.log(u, i));
    this.userForm.addControl(
      'user' + this.users.length,
      this.builder.group({
        name: [user.name, []],
        age: [user.age, []],
      })
    );
  }
}
