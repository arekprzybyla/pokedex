import { Pokemon } from "../types/pokemon";
import dropdownStyles from "../scss/Dropdown.module.scss";

export interface DropdownProps {
  pokemonData: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
  selectedPokemon: Pokemon;
  updatePokemonIndex: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  pokemonData,
  onSelect,
  selectedPokemon,
}) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <select
        value={selectedPokemon.name}
        className={dropdownStyles.selectPokemon}
        onChange={(e) => {
          const selected = pokemonData.find(
            (pokemon) => pokemon.name === e.target.value
          );
          if (selected) {
            onSelect(selected);
          }
        }}
      >
        {pokemonData &&
          pokemonData.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {capitalizeFirstLetter(pokemon.name)}
            </option>
          ))}
      </select>
      {/* <BootStrapDropdown>
        <BootStrapDropdown.Toggle variant="success" id="dropdown-basic">
          Select a Pokemon!
        </BootStrapDropdown.Toggle>

        <BootStrapDropdown.Menu>
          {pokemonData &&
            pokemonData.map((pokemon) => (
              <BootStrapDropdown.Item href="#/action-1">
                {pokemon.name}
              </BootStrapDropdown.Item>
            ))}
        </BootStrapDropdown.Menu>
      </BootStrapDropdown> */}
      {/* <Form.Select aria-label="Default select example">
        {pokemonData &&
          pokemonData.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
      </Form.Select> */}
    </div>
  );
};

export default Dropdown;
