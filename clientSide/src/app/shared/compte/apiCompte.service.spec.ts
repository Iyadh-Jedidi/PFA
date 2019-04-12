import { TestBed } from '@angular/core/testing';

import { ApiCompteService } from './apiCompte.service';

describe('ApiOffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCompteService = TestBed.get(ApiCompteService);
    expect(service).toBeTruthy();
  });
});
