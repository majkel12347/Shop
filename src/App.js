import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/Shop/shop.component";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/">HomePage</Link>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/dietary" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
