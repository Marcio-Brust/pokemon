import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import myGif from "../assets/img/getting.gif";

const Home = () => {
  const api = "https://api.pokemontcg.io/v2/";
  const { data, error, loading } = useFetch(`${api}cards`);

  if (error)
    return (
      <div className=" mt-32 text-center font-extrabold text-red-600">
        {error && "Ocorreu um erro, carregue a página novamente."}
      </div>
    );
  if (loading) return <img className="imgLoading" src={myGif} alt="mygif" />;
  return (
    <div className="box-border grid grid-cols-1  gap-8   bg-black  p-10 sm:grid-cols-3 md:grid-cols-4">
      {data?.map((item, index) => (
        <Link
          to={`/modal?id=${item.id}`}
          className=" grid justify-center "
          key={index}
        >
          <img
            id={item.id}
            className="img cursor-pointer"
            src={item.images.small}
            alt="imagem"
          ></img>
        </Link>
      ))}
    </div>
  );
};

export default Home;
