import React from "react";
import { useFetch } from "../Hooks/useFetch";

const Home = () => {
  const api = "https://api.pokemontcg.io/v2/";
  const { data, error, loading } = useFetch(`${api}cards`);

  const dataName = data?.map((item) => item.name);

  const dataFilter = dataName?.filter(
    (item, index) => dataName.indexOf(item) === index
  );

  return (
    <>
      {dataFilter?.map((item, index) => (
        <section key={index}>
          <div>
            <p>{item}</p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;
