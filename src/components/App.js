import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Lato', sans-serif;
    margin: 10px;
  }
`;

const App = (props) => {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <Switch>
        <Route exact path="/">
          <Home items={props.items} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
