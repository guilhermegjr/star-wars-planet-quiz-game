import { createAction, props } from '@ngrx/store';
import { Planet } from '../models/planet.model';

// GetRandomPlanet
// --------------------------------------------------------
export const GetRandomPlanet = createAction('[Planet] Get random planet');
export const GetRandomPlanetSuccess = createAction(
	'[Planet] Get random planet (Success)',
	props<{ planet: Planet }>()
);
export const GetRandomPlanetFail = createAction(
	'[Planet] Get random planet (Fail)',
	props<{ error: any }>()
);
