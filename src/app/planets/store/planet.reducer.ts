import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Planet } from '../models/planet.model';
import * as PlanetActions from './planet.actions';

// Define the Entity interface to the Planets
export interface PlanetState extends EntityState<Planet> {
	lastViewdPlanetId: number;
	viewdPlanetsIds: number[];
	isLoadingPlanet: boolean;
	error: any;
}

// Define the planet adapter to be used to update the state.
export const planetAdapter: EntityAdapter<Planet> = createEntityAdapter<Planet>();

// Define the initial state to the Planet Entity
export const initialState: PlanetState = planetAdapter.getInitialState({
	lastViewdPlanetId: null,
	viewdPlanetsIds: [],
	isLoadingPlanet: false,
	error: null,
});

// Define the reducer to transform the data and to create the new state
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

// Export the reducer
export function planetReducer(state: PlanetState, action: Action) {
	return reducer(state, action);
}
