import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:4730/books/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<{ id: string }> {
    return this.http.get<any>(this.url);
  }
}
