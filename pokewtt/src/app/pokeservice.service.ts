import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient } from "@angular/common/http";
import { PokeApiPokemonResult } from "./poke-api-pokemon-result";
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class PokeService {
  serviceRoot = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) {}

  getPokemon(ids: number[]): Observable<Pokemon[]>{
    const apiCalls = [];
    if (ids.length > 0) {
      ids.forEach(id => {
        apiCalls.push(this.http
          .get<PokeApiPokemonResult>(`${this.serviceRoot}pokemon/${id}`));
      });
      return forkJoin<PokeApiPokemonResult>(apiCalls).pipe(map(results => {
        return results.map(x => this.parsePokemon(x));
      }));
    } else {
      return of([]);
    }
  }

  parsePokemon(data: PokeApiPokemonResult): Pokemon {
    let pokemon = new Pokemon();
    pokemon.pokedex = data.id;
    pokemon.types = data.types ? data.types.map( x => x.type.name) : null;
    pokemon.species = data.species ? data.species.name : null;
    pokemon.spriteMale = data.sprites.front_default;
    pokemon.spriteFemale = data.sprites.front_female
      ? data.sprites.front_female
      : data.sprites.front_default;
    pokemon.spriteShinyMale = data.sprites.front_shiny;
    pokemon.spriteShinyFemale = data.sprites.front_shiny_female
      ? data.sprites.front_shiny_female
      : data.sprites.front_shiny;
    return pokemon;
  }
}
