import React, { useEffect, useState } from "react";

const Home = () => {
  interface IPokemon {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
  }

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function ApiPokemon() {
      const response = await fetch("https://api.pokemontcg.io/v2/cards");
      const json = await response.json();
      setPokemon(json.data);
    }
    ApiPokemon();
  }, []);

  return <div>{pokemon.map((pokemons) => console.log(pokemons))}</div>;
};

export default Home;
