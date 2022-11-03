import "./App.css";

import { Route, Routes } from "react-router-dom";

import Buttons from "./Buttons";
import Footer from "./Footer";
import Login from "./Components/Login";
import Logos from "./Logos";
import Profile from "./Profile";
import React from "react";

function App() {
  return (
    <div className="App">
      <Profile />
      <Buttons />
      <Logos />
      <Footer />
      <div className="contact-page">
        <Routes>
          <Route path="/contact" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
