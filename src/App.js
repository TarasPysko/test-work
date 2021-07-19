import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Characters from "./pages/Characters";
import Episode from "./pages/Episode";
import Home from "./pages/Home";

import Locations from "./pages/Locations";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/episode">
          <Episode />
        </Route>
        <Route path="/Locations">
          <Locations />
        </Route>
        <Route path="/watchList">
          <WatchList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
