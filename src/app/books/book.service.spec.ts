import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BookService } from './book.service';
const books = [];
describe('BookService', () => {
  let service: BookService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should recieve a Book', () => {
    service.getBook('kjhkh').subscribe((b) => {
      expect(b).toBe(books[0]);
    });

    const req = backend.expectOne('http://localhost:4730/books/');
    expect(req.request.method).toBe('GET');
    req.flush(books[0]);
  });
});
