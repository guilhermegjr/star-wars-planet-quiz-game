import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Planet } from '../models/planet.model';
import * as PlanetActions from './planet.actions';

export interface PlanetState extends EntityState<Planet> {
	lastViewdPlanetId: number;
	viewdPlanetsIds: number[];
	isLoadingPlanet: boolean;
	error: any;
}

export const planetAdapter: EntityAdapter<Planet> = createEntityAdapter<Planet>();

export const initialState: PlanetState = planetAdapter.getInitialState({
	lastViewdPlanetId: null,
	viewdPlanetsIds: [],
	isLoadingPlanet: false,
	error: null,
});

const reducer = createReducer(
	initialState,
	on(PlanetActions.GetRandomPlanet, state => ({ ...state, error: null, isLoadingPlanet: true })),
	on(PlanetActions.GetRandomPlanetFail, (state, { error }) => ({
		...state,
		error,
		isLoadingPlanet: false,
	})),
	on(PlanetActions.GetRandomPlanetSuccess, (state, { planet }) =>
		planetAdapter.upsertOne(planet, {
			...state,
			lastViewdPlanetId: planet.id,
			isLoadingPlanet: false,
			error: null,
		})
	)
);

export function planetReducer(state: PlanetState, action: Action) {
	return reducer(state, action);
}
