import { TestBed, async, inject } from '@angular/core/testing';

import { LoginguardGuard } from './login.guard';

describe('LoginguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginguardGuard]
    });
  });

  // it('should ...', inject([LoginguardGuard], (guard: LoginguardGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
