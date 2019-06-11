import { TestBed } from '@angular/core/testing';

import { ApiCompteService } from './api-compte.service';

describe('ApiCompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCompteService = TestBed.get(ApiCompteService);
    expect(service).toBeTruthy();
  });
});
