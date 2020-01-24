import { TestBed } from '@angular/core/testing';
import { PlanetServices } from './planet-services.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlanetServicesService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		})
	);

	it('should be created', () => {
		const service: PlanetServices = TestBed.get(PlanetServices);
		expect(service).toBeTruthy();
	});
});
