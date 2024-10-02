import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import pokedexStyles from "../scss/Pokedex.module.scss";
import { TabsProps } from "../types/pokemon";
import StatBoxSingle from "./StatBoxSingle";

const Tabs: React.FC<TabsProps> = ({ selectedPokemonData }) => {
  const colourMatch: any = {
    normal: "normal",
    fire: "fire",
    water: "water",
    grass: "grass",
    electric: "electric",
    ice: "ice",
    fighting: "fighting",
    poison: "poison",
    ground: "ground",
    flying: "flying",
    psychic: "psychic",
    bug: "bug",
    rock: "rock",
    ghost: "ghost",
    dragon: "dragon",
    dark: "dark",
    steel: "steel",
    fairy: "fairy",
  };

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const findPokemonColour = (type: string) => {
    return colourMatch[type];
  };
  return (
    <div className={pokedexStyles.tabContainer}>
      <div className={pokedexStyles.tabSelectContainer}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    className="text-light tabs-element"
                    eventKey="first"
                  >
                    Abilties
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="text-light tabs-element"
                    eventKey="second"
                  >
                    Types
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="text-light tabs-element"
                    eventKey="third"
                  >
                    Physical
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <div className={pokedexStyles.tabInfoContainer}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {selectedPokemonData &&
                      selectedPokemonData.abilities.map((ability, index) => (
                        <div
                          className={pokedexStyles.tabElement}
                          id={findPokemonColour(
                            selectedPokemonData.types[0].type.name
                          )}
                          key={index}
                        >
                          {capitalizeFirstLetter(ability.ability.name)}
                        </div>
                      ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {selectedPokemonData &&
                      selectedPokemonData.types.map((type, index) => (
                        <div
                          className={pokedexStyles.tabElement}
                          id={findPokemonColour(
                            selectedPokemonData.types[0].type.name
                          )}
                          key={index}
                        >
                          {capitalizeFirstLetter(type.type.name)}
                        </div>
                      ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div
                      className={pokedexStyles.tabElement}
                      id={
                        selectedPokemonData &&
                        findPokemonColour(
                          selectedPokemonData.types[0].type.name
                        )
                      }
                    >
                      Weight:{" "}
                      {selectedPokemonData &&
                        (selectedPokemonData.weight * 0.1).toFixed(1)}{" "}
                      kg
                    </div>
                    <div
                      className={pokedexStyles.tabElement}
                      id={
                        selectedPokemonData &&
                        findPokemonColour(
                          selectedPokemonData.types[0].type.name
                        )
                      }
                    >
                      Height:{" "}
                      {selectedPokemonData &&
                        (selectedPokemonData.height * 0.1).toFixed(1)}{" "}
                      m
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div className={pokedexStyles.statBox}>
        {selectedPokemonData &&
          selectedPokemonData.stats.map((stat, index) => (
            <StatBoxSingle
              key={index}
              statValue={stat.base_stat}
              statName={stat.stat.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
