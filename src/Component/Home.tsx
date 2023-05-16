import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Loading } from "../styled/Loading";
import gif from "../assets/img/pokeball-throwing.gif";
import useMedia from "../Hooks/useMedia";

const Home = () => {
  const api = "https://api.pokemontcg.io/v2/";

  const { data, error, loading } = useFetch(`${api}cards`);
  const [name, setName] = useState("Lugia");
  const [error2, setError2] = useState<string | null>(null);

  const mobile = useMedia("(max-width: 50rem)");

  const dataName = data?.map((item) => item.name);
  const dataFilter = dataName?.filter(
    (item, index) => dataName.indexOf(item) === index
  );

  function searchName() {
    const namePokemon = document.querySelector("input");
    if (namePokemon) {
      const nomePokemon = dataName?.find((item) => item === namePokemon.value);
      if (nomePokemon === undefined) {
        const errorPokemon = "Pokemon não encontrado!!!";
        setError2(errorPokemon);
      } else {
        setError2(null);
        if (nomePokemon) {
          setName(nomePokemon);
        }
      }
    }
  }

  function handleName({ target }) {
    const p = document.querySelectorAll("p");

    p.forEach((item) => {
      item.classList.remove("active");
    });

    target.classList.toggle("active");
    setName(target.innerText);
  }

  if (loading) return <Loading style={{ margin: "0 auto" }}></Loading>;

  return (
    <>
      <div className={`searchDiv`}>
        {" "}
        <label
          htmlFor="search"
          style={{
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            fontFamily: "monospace",
            marginLeft: "4px",
          }}
        >
          Buscar Pokemon
        </label>
        <div className="flex">
          <input type="text" className="search" name="search" id="search" />

          <button className="btn" onClick={searchName}>
            <img src={gif} alt="imagem" />
          </button>
        </div>
        <div
          style={{
            color: "red",
            fontFamily: "monospace",
            fontSize: "0.6rem",
            fontWeight: "bold",
            marginLeft: "4px",
            height: "10px",
          }}
        >
          {error2}
        </div>
      </div>

      <section className={`${mobile ? "bodyFullMobile" : "bodyFull"}  `}>
        <div className={`${mobile ? "nome-pokemonMobile" : "name-pokemon"}`}>
          {dataFilter?.map((item) => (
            <p
              id={item}
              style={{
                cursor: "pointer",
                padding: "5px 0 5px 10px",
                borderRadius: "5px",
              }}
              key={item}
              onClick={handleName}
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          {data
            ?.filter((item) => item.name === `${name}`)
            .map((item) => (
              <div className=" flex">
                <img
                  className={`${mobile ? "imgPokemonMobile" : "imgPokemon"}`}
                  src={item.images.small}
                  alt="imagem"
                />
                <div className="ml-5 grid">
                  <span>Tipo: {item.types.toString()}</span>
                  <span>Level: {item.level}</span>
                  <span>Hp: {item.hp}</span>
                  <span>Raridade: {item.rarity}</span>
                  <span>Subtipos: {item.subtypes}</span>
                  <span>Supertipos: {item.supertype}</span>
                </div>
              </div>
            ))
            .reverse()
            .pop()}
        </div>
      </section>
    </>
  );
};

export default Home;
