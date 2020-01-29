import { Injectable } from '@angular/core';
import { PokeService } from './pokeservice.service';
import { PokemonTrade } from './pokemon-trade';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTradeService {

  constructor(private pokeService: PokeService) { }

  getTrades(ids: number[]): Observable<PokemonTrade[]> {
    return this.pokeService.getPokemon(ids).pipe<PokemonTrade[]>(map( x => {
      const trades = [];
      x.forEach( pokemon => {
        let trade = new PokemonTrade();
        trade.pokemon = pokemon;
        trade.gender = pokemon.pokedex < 145 ? 'male' : 'female';
        trade.shiny = pokemon. pokedex < 145;
        trades.push(trade);
      });
      return trades;
    }));
  }
}
