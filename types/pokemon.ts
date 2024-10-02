//single//

export interface Pokemon {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
}
  
export type PokemonData = {
    results: Pokemon[];
  };    

export interface PokemonFullData {
  name: string;
  weight: number;
  height: number;
  id: number;
  
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  
  sprites: {
    front_default: string;
    other: {
      ['official-artwork']: {
        front_default: string;
      }
    }
  };
  abilities: {
    ability: Ability;
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}

//props//

export interface PokemonDataProps {
  pokemonData: Pokemon[];
}

export interface StatBoxSingleProps {
  statValue: number;
  statName: string;
}

export interface TabsProps {
  selectedPokemonData: PokemonFullData | null;
}

export interface SlideProps {
  selectedPokemonData: PokemonFullData | null;

  currentIndex: number;
  fetchNextPokemon: () => void;
  fetchPrevPokemon: () => void;
}