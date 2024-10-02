import React from "react";
import { StatBoxSingleProps } from "../types/pokemon";
import pokedexStyles from "../scss/Pokedex.module.scss";

const StatBoxSingle: React.FC<StatBoxSingleProps> = ({
  statValue,
  statName,
}) => {
  const reducedStatValue = statValue * 0.04;
  const totalBlocks = 7;
  const blocks = [];
  for (let i = 1; i <= totalBlocks; i++) {
    blocks.push(
      <div
        key={i}
        className={`block ${i <= reducedStatValue ? "filled" : "empty"}`}
      ></div>
    );
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={pokedexStyles.singleStatContainer}>
      <div className={pokedexStyles.statBlocksContainer}>{blocks}</div>
      <p>
        {statName === "hp"
          ? statName.toUpperCase()
          : capitalizeFirstLetter(statName)}
      </p>
    </div>
  );
};

export default StatBoxSingle;
