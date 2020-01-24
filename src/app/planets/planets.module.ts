import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { planetReducer } from './store/planet.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlanetEffects } from './store/planet.effects';
import { PlanetPageComponent } from './containers/planet-page/planet-page.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';

@NgModule({
	declarations: [PlanetPageComponent, PlanetInfoComponent, PlanetPageComponent],
	imports: [
		CommonModule,
		PlanetsRoutingModule,
		SharedModule,
		StoreModule.forFeature('planets', planetReducer),
		EffectsModule.forFeature([PlanetEffects]),
	],
})
export class PlanetsModule {}
