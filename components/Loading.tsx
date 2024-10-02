import React from "react";
import pokedexStyles from "../scss/Pokedex.module.scss";

const Loading = () => {
  return (
    <div className={pokedexStyles.welcomeDiv}>
      <div className={pokedexStyles.imgCrop}>
        <img className={pokedexStyles.pokeball} src="pokeball.gif" alt="" />
      </div>
    </div>
  );
};

export default Loading;
