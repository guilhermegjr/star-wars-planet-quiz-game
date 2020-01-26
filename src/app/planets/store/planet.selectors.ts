import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PlanetState } from './planet.reducer';

const getState = createFeatureSelector<PlanetState>('planets');
export const getPlanetState = createSelector(getState, state => state || ({} as any));
export const getPlanetIds = createSelector(getPlanetState, state => state.ids as number[]);
export const isLoadingPlanet = createSelector(getPlanetState, state => state.isLoadingPlanet);
export const getError = createSelector(getPlanetState, state => state.error);
export const getAllPlanets = createSelector(getPlanetState, state =>
	Object.keys(state.entities).map(id => state.entities[id])
);
export const getLastViewdPlanet = createSelector(
	getPlanetState,
	state => state.entities[state.lastViewdPlanetId]
);
