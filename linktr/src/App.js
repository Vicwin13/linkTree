import "./App.css";

import Buttons from "./Buttons";
import Footer from "./Footer";
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
    </div>
  );
}

export default App;
