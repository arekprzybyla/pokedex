import React from "react";
import footerStyles from "../scss/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={footerStyles.infoDiv}>
        <div>
          <h1>What is a Pokédex?</h1>
          <p>
            The Pokédex is an essential tool for Pokémon Trainers, designed to
            provide detailed information on every known Pokémon species. It
            catalogs data such as the Pokémon&#39;s type, abilities,
            evolutionary line, and even their natural habitats.
          </p>
          <p>
            As Trainers encounter new Pokémon in the wild or through battles,
            the Pokédex automatically updates with new entries. Originally
            created by Professor Oak, this device has been updated with advanced
            features in each region, allowing Trainers to track and study
            Pokémon more efficiently than ever before.
          </p>
        </div>
        <div className={footerStyles.pikachuCrop}>
          <img src="pikachu.svg" alt="" />
        </div>
        <div>
          <h1>Why use a Pokédex?</h1>
          <p>
            Beyond being a digital encyclopedia, the Pokédex helps Trainers
            understand the strengths and weaknesses of each Pokémon they
            encounter.
          </p>
          <p>
            Whether it&#39;s identifying type advantages in battle or learning
            about a Pokémon&#39;s unique behavior in the wild, the Pokédex is a
            key resource for making strategic decisions.
          </p>
          <p>
            Some versions even include regional or special Pokédexes, allowing
            you to focus on completing specific areas of research as you explore
            different Pokémon habitats.
          </p>
        </div>
      </div>
      <div className={footerStyles.footerDiv}>
        <p>© 2024 Pokédex, All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
