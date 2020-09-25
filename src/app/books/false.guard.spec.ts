import { TestBed } from '@angular/core/testing';

import { FalseGuard } from './false.guard';

describe('FalseGuard', () => {
  let guard: FalseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FalseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
