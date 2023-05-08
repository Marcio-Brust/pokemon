import React from "react";

import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Header />
        <Routes>{<Route path="/" element={<Home />} />}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
