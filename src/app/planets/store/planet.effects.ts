import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import * as PlanetActions from '../store/planet.actions';
import { PlanetServices } from '../services/planet-services.service';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PlanetState } from './planet.reducer';
import { getPlanetIds } from './planet.selectors';

@Injectable()
export class PlanetEffects {
	constructor(
		private actions$: Actions,
		private planetServices: PlanetServices,
		private store: Store<PlanetState>
	) {}

	// Efeito responsável por buscar o planeta randmicamente.
	// --------------------------------------------------
	getRandomPlanet$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PlanetActions.GetRandomPlanet),
			withLatestFrom(this.store.pipe(select(getPlanetIds))),
			switchMap(([, viewdPlanetIds]) =>
				this.planetServices.getRandomPlanet(viewdPlanetIds).pipe(
					map(planet => PlanetActions.GetRandomPlanetSuccess({ planet })),
					catchError(error => of(PlanetActions.GetRandomPlanetFail({ error })))
				)
			)
		)
	);
}
