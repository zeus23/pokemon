export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonCardProp {
    item: IPokemon;
    handleClick: any;
}
