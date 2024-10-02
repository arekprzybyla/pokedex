import React, { useState, useEffect } from "react";
import pokedexStyles from "../scss/Pokedex.module.scss";
import { SlideProps } from "../types/pokemon";

const PokemonSlide: React.FC<SlideProps> = ({
  selectedPokemonData,
  currentIndex,
  fetchPrevPokemon,
  fetchNextPokemon,
}) => {
  return (
    <div className={pokedexStyles.pokemonMainContainer}>
      <div className={pokedexStyles.arrowDiv}>
        {currentIndex > 0 && (
          <img
            onClick={fetchPrevPokemon}
            className={pokedexStyles.arrows}
            src="arrow_left.svg"
            alt=""
          />
        )}
      </div>

      {selectedPokemonData && selectedPokemonData.sprites ? (
        <div className={pokedexStyles.pokemonDiv}>
          <img
            className={pokedexStyles.pokemonSprite}
            src={
              selectedPokemonData.sprites.other["official-artwork"]
                .front_default
            }
            alt=""
          />
        </div>
      ) : null}
      <div className={pokedexStyles.arrowDiv}>
        {currentIndex < 1301 && (
          <img
            onClick={fetchNextPokemon}
            className={pokedexStyles.arrows}
            src="arrow_right.svg"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default PokemonSlide;
