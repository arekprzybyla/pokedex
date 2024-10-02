import React from "react";
import pokedexStyles from "../scss/Pokedex.module.scss";
import { useState, useEffect } from "react";
import { PokemonDataProps, Pokemon, PokemonFullData } from "../types/pokemon";
import Dropdown from "./Dropdown";
import Loading from "./Loading";
import Tabs from "./Tabs";
import PokemonSlide from "./PokemonSlide";

const Pokedex: React.FC<PokemonDataProps> = ({ pokemonData }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    pokemonData[0]
  );
  const [selectedPokemonData, setSelectedPokemonData] =
    useState<PokemonFullData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!selectedPokemon) return;
    const fetchSelectedPokemon = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(selectedPokemon.url);
        const data = await res.json();
        setIsLoading(false);
        setSelectedPokemonData(data);
        updatePokemonIndex();
      } catch (error) {
        console.error("Error fetching selected Pokémon data:", error);
      }
    };

    fetchSelectedPokemon();
  }, [selectedPokemon]);

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const fetchNextPokemon = () => {
    handlePokemonSelect(selectedPokemon);
    if (selectedPokemonData) {
      const foundCurrentIndex = pokemonData.findIndex(
        (pokemon) => pokemon.name === selectedPokemon.name
      );
      const nextIndex = foundCurrentIndex + 1;
      handlePokemonSelect(pokemonData[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const fetchPrevPokemon = () => {
    handlePokemonSelect(selectedPokemon);
    if (selectedPokemonData) {
      const foundCurrentIndex = pokemonData.findIndex(
        (pokemon) => pokemon.name === selectedPokemon.name
      );
      const prevIndex = foundCurrentIndex - 1;
      handlePokemonSelect(pokemonData[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  const updatePokemonIndex = () => {
    if (selectedPokemonData) {
      const foundCurrentIndex = pokemonData.findIndex(
        (pokemon) => pokemon.name === selectedPokemon.name
      );
      setCurrentIndex(foundCurrentIndex);
    }
  };

  return (
    <div className={pokedexStyles.pageContainer}>
      <div className={pokedexStyles.pokedexContainer}>
        <Dropdown
          pokemonData={pokemonData}
          onSelect={handlePokemonSelect}
          selectedPokemon={selectedPokemon}
          updatePokemonIndex={updatePokemonIndex}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <PokemonSlide
              selectedPokemonData={selectedPokemonData}
              currentIndex={currentIndex}
              fetchNextPokemon={fetchNextPokemon}
              fetchPrevPokemon={fetchPrevPokemon}
            />
            <Tabs selectedPokemonData={selectedPokemonData} />
          </>
        )}

        {/* {selectedPokemonData ? (
          <PokemonSlide selectedPokemonData={selectedPokemonData} />
        ) : (
          <div className={pokedexStyles.welcomeDiv}>
            <div className={pokedexStyles.imgCrop}>
              <img
                className={pokedexStyles.pokeball}
                src="pokeball.gif"
                alt=""
              />
            </div>
          </div>
        )} */}

        {/* <SearchDropdown items={pokemonData} /> */}
        {/* <img className={pokedexStyles.pokemonImg} src="" alt="" /> */}
      </div>
    </div>
  );
};

export default Pokedex;
