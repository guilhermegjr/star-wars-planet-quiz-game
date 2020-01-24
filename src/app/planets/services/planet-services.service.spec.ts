import { TestBed } from '@angular/core/testing';

import { PlanetServicesService } from './planet-services.service';

describe('PlanetServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetServicesService = TestBed.get(PlanetServicesService);
    expect(service).toBeTruthy();
  });
});
