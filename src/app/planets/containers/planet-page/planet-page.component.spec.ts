import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetPageComponent } from './planet-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanetInfoComponent } from '../../components/planet-info/planet-info.component';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PlanetState } from '../../store/planet.reducer';
import { Planet } from '../../models/planet.model';
import { getLastViewdPlanet } from '../../store/planet.selectors';
import { MY_PLANET } from 'src/app/shared/utils/test-data';

describe('PlanetPageComponent', () => {
	let component: PlanetPageComponent;
	let fixture: ComponentFixture<PlanetPageComponent>;
	let mockStore: MockStore<PlanetState>;
	let mockPlanetSelector: MemoizedSelector<PlanetState, Planet>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PlanetPageComponent, PlanetInfoComponent],
			providers: [provideMockStore()],
			imports: [SharedModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlanetPageComponent);
		component = fixture.componentInstance;
		mockStore = TestBed.get(Store);
		mockPlanetSelector = mockStore.overrideSelector(getLastViewdPlanet, MY_PLANET);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a header and footer', () => {
		const header = fixture.nativeElement.querySelector('sw-header');
		const footer = fixture.nativeElement.querySelector('sw-footer');
		expect(header && footer).toBeTruthy();
	});

	it(`header should have the title ${MY_PLANET.name}`, () => {
		const header = fixture.nativeElement.querySelector('sw-header').innerText;
		expect(header).toContain(MY_PLANET.name);
	});
});
