import { Pokemon } from './pokemon';

export class PokemonTrade {
  pokemon: Pokemon;
  gender: string;
  lucky: boolean;
  shiny: boolean;
  minLevel: number;

  sprite(): string {
    let sprite = this.shiny
      ? this.pokemon.spriteShinyMale
      : this.pokemon.spriteMale;
    if (this.gender === 'female') {
      if (this.shiny) {
        return this.pokemon.spriteShinyFemale;
      }
      return this.pokemon.spriteFemale;
    }
    return sprite;
  }
}
