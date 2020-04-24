import { TestBed } from '@angular/core/testing';

import { StayGuard } from './stay.guard';

describe('StayGuard', () => {
  let guard: StayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
