import Head from "next/head";
import Title from "../components/Title";
import Pokedex from "../components/Pokedex";
import Footer from "../components/Footer";
import { PokemonDataProps } from "../types/pokemon";
import { PokemonData } from "../types/pokemon";
import { GetStaticProps } from "next";
import axios from "axios";

const Home: React.FC<PokemonDataProps> = ({ pokemonData }) => {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="keywords" content="pokemon, pokedex, pikachu, abilities" />
      </Head>
      <Title />
      <Pokedex pokemonData={pokemonData} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get<PokemonData>(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    console.log(data.results);
    return {
      props: {
        pokemonData: data.results,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        pokemonData: [],
      },
    };
  }
};

export default Home;
