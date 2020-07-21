import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";

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
          Home
        </Route>
        <Route path="/about">About</Route>
        <Route path="/items/:itemId">Item Details</Route>
      </Switch>
    </Router>
  );
};

export default App;
