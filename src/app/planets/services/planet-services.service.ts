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

	/**
	 * Busca um planeta de forma randomica, evitando retornar os que já foram retornados.
	 * Caso todos os 61 planetas tenham sido visualizados, retorna qualquer um.
	 *
	 * @param viewdPlanetIds Array contendo o ID dos planetas já visualizados pelo usuário
	 */
	getRandomPlanet(viewdPlanetIds: number[]): Observable<Planet> {
		const planetId = this.getPlanetIdNotViewd(viewdPlanetIds);

		return this.http
			.get<Planet>(`https://swapi.co/api/planets/${planetId}`)
			.pipe(map(planet => ({ ...planet, id: planetId })));
	}

	/**
	 * Gera randomicamente o ID de um planeta, evitando os já visualizados.
	 * @param viewdPlanetIds Array contendo o ID dos planetas já visualizados pelo usuário
	 */
	private getPlanetIdNotViewd(viewdPlanetIds: number[]): number {
		const id = Math.floor(Math.random() * 61) + 1;

		return viewdPlanetIds.length < 61 && viewdPlanetIds.find(_id => _id === id)
			? this.getPlanetIdNotViewd(viewdPlanetIds)
			: id;
	}
}
