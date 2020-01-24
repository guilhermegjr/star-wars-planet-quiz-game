import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../models/planet.model';

@Component({
	selector: 'sw-planet-info',
	templateUrl: './planet-info.component.html',
	styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent implements OnInit {
	@Input() planet: Planet;

	constructor() {}

	ngOnInit() {}

	/**
	 * Busca detalhes sobre a relação do planeta com os filmes
	 */
	getFilmInfo() {
		if (!this.planet) {
			return '';
		}

		const { films } = this.planet;
		const filmStr = films.length > 1 ? 'films' : 'film';
		return films.length ? `Featured in ${films.length} ${filmStr}` : `Not featured in any film`;
	}
}
