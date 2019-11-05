import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Index from "./scenes/Home/Index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Verblizador</h1>
      <main>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
