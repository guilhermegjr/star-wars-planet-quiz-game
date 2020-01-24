import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetInfoComponent } from './planet-info.component';
import { MY_PLANET } from 'src/app/shared/utils/test-data';

describe('PlanetInfoComponent', () => {
	let component: PlanetInfoComponent;
	let fixture: ComponentFixture<PlanetInfoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PlanetInfoComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlanetInfoComponent);
		component = fixture.componentInstance;
		component.planet = MY_PLANET;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have presented planet name, population, climate, and terrain', () => {
		const el = fixture.nativeElement;
		const props = el.querySelectorAll('.text');
		const hasName = props[0].innerText === MY_PLANET.name;
		const hasPopulation = props[1].innerText === MY_PLANET.population.toString();
		const hasClimate = props[2].innerText === MY_PLANET.climate;
		const hasTerrain = props[3].innerText === MY_PLANET.terrain;
		expect(hasName && hasPopulation && hasClimate && hasTerrain).toBeTruthy();
	});
});
