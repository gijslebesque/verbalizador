import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Index from "./scenes/Home/Index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Verblizador</h1>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
