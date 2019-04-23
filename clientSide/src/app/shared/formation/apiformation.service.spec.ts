import { TestBed } from '@angular/core/testing';

import { ApiformationService } from './apiformation.service';

describe('ApiformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiformationService = TestBed.get(ApiformationService);
    expect(service).toBeTruthy();
  });
});
