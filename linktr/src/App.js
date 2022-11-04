import "./App.css";

import { Route, Routes } from "react-router-dom";

import Contact from "./Components/Contact";
import Home from "./Components/Home";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
