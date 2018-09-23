import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import CartPage from "./pages/Cart";
import CounterPage from "./pages/Counter";

import Nav from "./layout/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="App-content">
          <Switch>
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/counter" component={CounterPage} />
            <Redirect to="/counter" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
