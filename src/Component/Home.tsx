import React from "react";
import { useFetch } from "../Hooks/useFetch";

const Home = () => {
  const { data } = useFetch("https://api.pokemontcg.io/v2/cards");

  return (
    <div className="box-border grid grid-cols-1  gap-8   bg-black  p-10 sm:grid-cols-3 md:grid-cols-4">
      {data?.map((item, index) => (
        <div className=" grid justify-center" key={index}>
          <img
            className=" cursor-pointer"
            src={item.images.small}
            alt="imagem"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default Home;
