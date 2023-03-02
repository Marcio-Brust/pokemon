import React from "react";
import myGif from "../assets/img/getting.gif";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const api = "https://api.pokemontcg.io/v2/";

  const searchParams = new URLSearchParams(document.location.search);
  const id = searchParams.get("id");

  interface ICard {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    images: {
      small: string;
      large: string;
    };
    rarity: string;
  }

  const [card, setCard] = React.useState<ICard | null>(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function apiId() {
      try {
        setLoading(true);
        const response = await fetch(`${api}cards/${id}`);
        const json = await response.json();
        setCard(json.data);
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    apiId();
  }, [id, setCard]);

  const navigate = useNavigate();

  function changePage() {
    navigate("/");
  }

  if (error)
    return (
      <div className=" mt-32 text-center font-extrabold text-red-600">
        {error && "Ocorreu um erro, carregue a página novamente."}
      </div>
    );
  if (loading) return <img className="imgLoading" src={myGif} alt="mygif" />;
  return (
    <div
      onClick={changePage}
      className=" box-border grid cursor-pointer justify-evenly bg-black lg:flex"
    >
      {
        <div className=" p-4">
          <img src={card?.images.large} alt="foto" />
        </div>
      }
      <div className="mx-12 mt-8  mb-8 box-border">
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          Nome: {card?.name}
        </p>
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          Supertype: {card?.supertype}
        </p>
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          Subtypes: {card?.subtypes.toString()}
        </p>
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          Level: {card?.level}
        </p>
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          HP: {card?.hp}
        </p>
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          Types: {card?.types.toString()}
        </p>
        <p className=" mt-8 text-xl font-semibold text-orange-300 ">
          Rarity: {card?.rarity}
        </p>
      </div>
    </div>
  );
};

export default Modal;
