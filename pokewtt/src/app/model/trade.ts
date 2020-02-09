import { Move } from './move';

export class Trade {
    pokedex: number;
    name: string;
    registered: boolean;
    legendary: boolean;
    special: boolean;
    form: string;
    shiny: boolean;
    lucky: boolean;
    gender: string;
    specificLevel: boolean;
    minLevel: number;
    maxLevel: number;
    specificMoves: boolean;
    fastMove: Move;
    chargeMoves: Move[];
    specialRequests: string;

    constructor(
        pokedex: number,
        name: string,
        registered: boolean,
        legendary: boolean,
        shiny: boolean,
        lucky: boolean,
        gender: string,
        specificLevel: boolean,
        minLevel: number,
        maxLevel: number,
        specificMoves: boolean,
        fastMove: Move,
        chargeMoves: Move[],
        specialRequests: string) {
        this.pokedex = pokedex;
        this.name = name;
        this.registered = registered;
        this.legendary = legendary;
        this.shiny = shiny;
        this.special = !this.registered || this.legendary || this.shiny;
        this.lucky = lucky;
        this.gender = gender;
        this.specificLevel = specificLevel;
        if (this.specificLevel) {
          this.minLevel = minLevel;
          this.maxLevel = maxLevel;
        }
        this.specificMoves = specificMoves;
        if (this.specificMoves) {
            this.fastMove = fastMove;
            this.chargeMoves = chargeMoves;
        }
        this.specialRequests = specialRequests;
    }

    icon_url(): string {
        const baseUrl = 'https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_';
        const genderModifier = this.gender === 'female' ? '_01' : '_00';
        const shinyModifier = this.shiny ? '_shiny' : '';
        const formattedPokedex = (this.pokedex + '').padStart(3, '0');
        return `${baseUrl}${formattedPokedex}${genderModifier}${shinyModifier}.png`;
    }
}