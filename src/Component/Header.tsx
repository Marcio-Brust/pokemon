import React from "react";
import logo from "../assets/img/pokemon-4096.png";

const Header = () => {
  return (
    <header className=" box-border flex items-center  justify-evenly bg-slate-50 p-5">
      <img
        style={{ width: "300px", display: "block" }}
        src={logo}
        alt="imagem"
      />
    </header>
  );
};

export default Header;
