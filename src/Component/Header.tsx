import React from "react";

const Header = () => {
  return (
    <header className=" box-border  flex items-center justify-between bg-black p-5 font-semibold text-cyan-50 ">
      <h1 className=" text-h1 text-orange-300">POKEMON</h1>
      <button className="btn-menu px-10 pt-5  pb-5 hover:text-orange-300 sm:px-10 md:pl-10  ">
        MENU
      </button>
      <ul className="menu flex">
        <li className=" cursor-pointer px-10  pt-5  pb-5  hover:text-orange-300 sm:px-10  md:pl-10">
          Todos
        </li>
        <li className="  cursor-pointer px-10  pt-5  pb-5  hover:text-orange-300 sm:px-10  md:pl-10">
          Tipos
        </li>
        <li className=" cursor-pointer px-10  pt-5  pb-5  hover:text-orange-300 sm:px-10  md:pl-10 ">
          Subtipos
        </li>
        <li className="  cursor-pointer px-10   pt-5 pb-5  hover:text-orange-300 sm:px-10 md:pl-10 ">
          Supertipos
        </li>
        <li className="  cursor-pointer px-10  pt-5 pb-5  hover:text-orange-300 sm:px-10  md:pl-10 ">
          Raros
        </li>
      </ul>
    </header>
  );
};

export default Header;
