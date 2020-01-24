import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PlanetState } from '../../store/planet.reducer';
import * as PlanetActions from '../../store/planet.actions';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet.model';
import { getLastViewdPlanet, isLoadingPlanet, getError } from '../../store/planet.selectors';

@Component({
	selector: 'sw-planet-page',
	templateUrl: './planet-page.component.html',
	styleUrls: ['./planet-page.component.scss'],
})
export class PlanetPageComponent implements OnInit {
	planet$: Observable<Planet>;
	isLoading$: Observable<boolean>;
	error$: Observable<Error | any>;

	constructor(private store: Store<PlanetState>) {}

	ngOnInit() {
		this.getNewPlanet();

		this.planet$ = this.store.pipe(select(getLastViewdPlanet));
		this.isLoading$ = this.store.pipe(select(isLoadingPlanet));
		this.error$ = this.store.pipe(select(getError));
	}

	/**
	 * Dispara a ação para buscar as informações de um novo planeta.
	 */
	getNewPlanet() {
		this.store.dispatch(PlanetActions.GetRandomPlanet());
	}
}
