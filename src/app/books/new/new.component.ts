import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, OnDestroy {
  bookForm: FormGroup;
  userForm: FormGroup;

  users = [];
  user1 = { name: '', age: '' };
  user2 = { name: '', age: '' };

  sub = new Subscription();
  constructor(
    private builder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

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
    this.sub.add(
      this.service
        .saveBook(this.bookForm.value)
        .subscribe((data) =>
          this.router.navigate(['..', data.isbn], { relativeTo: this.route })
        )
    );
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
