export class Pokemon {
    constructor(number, species, sprites, types) {
        this.pokedex = number;
        this.species = species;
        this.types = types;
        this.spriteMale = sprites.spriteMale;
        this.spriteFemale = sprites.spriteFemale;
        this.spriteShinyMale = sprites.spriteShinyMale;
        this.spriteShinyFemale = sprites.spriteShinyFemale;
    }
}