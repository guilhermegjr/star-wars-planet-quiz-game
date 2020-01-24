import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetPageComponent } from './containers/planet-page/planet-page.component';

const routes: Routes = [
	{
		path: '',
		component: PlanetPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PlanetsRoutingModule {}
