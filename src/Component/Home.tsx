import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";

const Home = () => {
  const api = "https://api.pokemontcg.io/v2/";
  const { data, error, loading } = useFetch(`${api}cards`);

  const dataName = data?.map((item: any) => item.name);

  const dataFilter = dataName?.filter(
    (item: string, index: number) => dataName.indexOf(item) === index
  );

  const [name, setName] = useState("Ampharos");

  function handleName({ target }) {
    setName(target.innerText);
  }

  return (
    <>
      <section className="mt-40 box-border flex justify-evenly bg-slate-50">
        <div
          className="name-pokemon"
          style={{
            maxWidth: "350px",
            height: "50vh",
            fontSize: "1rem",
            overflowY: "auto",
          }}
        >
          {dataFilter?.map((item: string) => (
            <p
              style={{ cursor: "pointer", paddingLeft: "10px" }}
              key={item}
              onClick={handleName}
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          {data
            ?.filter((item: any) => item.name === `${name}`)
            .map((item: any) => (
              <img
                className="imgPokemon"
                src={item.images.small}
                alt="imagem"
              />
            ))
            .reverse()
            .pop()}
        </div>
      </section>
    </>
  );
};

export default Home;
