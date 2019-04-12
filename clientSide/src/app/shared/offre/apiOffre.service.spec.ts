import { TestBed } from '@angular/core/testing';

import { ApiOffreService } from './apiOffre.service';

describe('ApiOffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiOffreService = TestBed.get(ApiOffreService);
    expect(service).toBeTruthy();
  });
});
