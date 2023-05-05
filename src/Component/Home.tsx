import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";

const Home = () => {
  const api = "https://api.pokemontcg.io/v2/";
  const { data, error, loading } = useFetch(`${api}cards`);

  const dataName = data?.map((item) => item.name);

  const dataFilter = dataName?.filter(
    (item, index) => dataName.indexOf(item) === index
  );

  const [name, setName] = useState("Ampharos");

  function handleName({ target }) {
    setName(target.innerText);
  }

  return (
    <>
      <section className="flex justify-evenly">
        <div>
          {dataFilter?.map((item) => (
            <p key={item} onClick={handleName}>
              {item}
            </p>
          ))}
        </div>
        <div>
          {data
            ?.filter((item) => item.name === `${name}`)
            .map((item) => <img src={item.images.small} alt="imagem" />)
            .reverse()
            .pop()}
        </div>
      </section>
    </>
  );
};

export default Home;
