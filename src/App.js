import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const MasksPage = () => (
  <div>
    <h1>MASKS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/masks" component={MasksPage} />
      </Switch>
    </div>
  );
}

export default App;
