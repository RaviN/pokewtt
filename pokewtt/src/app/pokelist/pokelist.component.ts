import { Component, OnInit, Input} from '@angular/core';
import { PokeService } from '../pokeservice.service';
import { Pokemon } from '../pokemon';
import { PokemonTrade } from '../pokemon-trade';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonTradeService } from '../pokemon-trade.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.sass']
})
export class PokelistComponent implements OnInit {
  list: Observable<PokemonTrade[]>;
  pokemonIds: Observable<number[]>;
  @Input() new_addition_id: number;

  constructor(private service: PokemonTradeService) { }

  ngOnInit() {
    this.pokemonIds = of([]);
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokemonIds.subscribe(x => this.list = this.service.getTrades(x));
  }

  addNewOne(newVal: number) {
    console.log('hello')
    this.pokemonIds.subscribe(x => {
      x.push(newVal);
      console.log(x);
      this.new_addition_id = null;
      this.loadPokemon();
    });
  }

}
