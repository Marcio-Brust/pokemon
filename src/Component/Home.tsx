import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Loading } from "../styled/Loading";

const Home = () => {
  const api = "https://api.pokemontcg.io/v2/";
  const { data, error, loading } = useFetch(`${api}cards`);

  const dataName = data?.map((item) => item.name);
  const dataFilter = dataName?.filter(
    (item, index) => dataName.indexOf(item) === index
  );

  const [name, setName] = useState("Ampharos");

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
      <section className="bodyFull box-border flex justify-evenly">
        <div
          className="name-pokemon"
          style={{
            maxWidth: "350px",
            height: "50vh",
            fontSize: "1rem",
            overflowY: "auto",
          }}
        >
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
