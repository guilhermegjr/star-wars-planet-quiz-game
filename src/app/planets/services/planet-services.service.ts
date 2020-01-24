import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class PlanetServices {
	constructor(private http: HttpClient) {}

	getRandomPlanet(viewdPlanetIds: number[]): Observable<Planet> {
		const planetId = this.getPlanetIdNotViewd(viewdPlanetIds);

		return this.http
			.get<Planet>(`https://swapi.co/api/planets/${planetId}`)
			.pipe(map(planet => ({ ...planet, id: planetId })));
	}

	private getPlanetIdNotViewd(idsViewd: number[]): number {
		const id = Math.floor(Math.random() * 61) + 1;
		return idsViewd.find(_id => _id === id) ? this.getPlanetIdNotViewd(idsViewd) : id;
	}
}
