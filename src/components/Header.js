import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderNav>
      <div>
        <h1>Fruit Emporium</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </HeaderNav>
  );
};

const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  margin-bottom: 20px;

  h1 {
    text-emphasis-style: bold;
  }

  a {
    margin: 0 5px;
    text-decoration: none;
    color: #000;
  }
`;

export default Header;
