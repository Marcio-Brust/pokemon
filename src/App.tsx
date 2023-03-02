import React from "react";
import Home from "./Component/Home";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./Component/Modal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
