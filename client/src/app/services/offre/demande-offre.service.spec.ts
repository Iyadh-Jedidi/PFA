import { TestBed } from '@angular/core/testing';

import { DemandeOffreService } from './demande-offre.service';

describe('DemandeOffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeOffreService = TestBed.get(DemandeOffreService);
    expect(service).toBeTruthy();
  });
});
