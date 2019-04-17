import { TestBed } from '@angular/core/testing';

import { NoAuthGaurdService } from './no-auth-gaurd.service';

describe('NoAuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoAuthGaurdService = TestBed.get(NoAuthGaurdService);
    expect(service).toBeTruthy();
  });
});
