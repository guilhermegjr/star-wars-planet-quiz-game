import { TestBed } from '@angular/core/testing';

import { PlanetServices } from './planet-services.service';

describe('PlanetServicesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PlanetServices = TestBed.get(PlanetServices);
		expect(service).toBeTruthy();
	});
});
