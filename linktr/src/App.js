import "./App.css";

import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

import Buttons from "./Buttons";
import Footer from "./Footer";
import Logos from "./Logos";
import NotFound from "./NotFound";
import Profile from "./Profile";
import React from "react";

function App() {
  return (
    <div className="App">
      <Profile />
      <Buttons />
      <Logos />
      <Footer />
      <Route path="*">
        <NotFound />
      </Route>
    </div>
  );
}

export default App;
