import React from "react";
import styled from "styled-components";

const Header = (props) => <Nav>Overtime Calculator</Nav>;

const Nav = styled.nav`
  display: flex;
  color: #fff;
  flex-direction: row;
  background-color: #343a40;
  box-shadow: rgba(31, 53, 78, 0.11) 0 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 1.95em;
  padding: 10px 30px;
  text-transform: uppercase;
  text-align: center;
  font-family: "Bitter", serif;
  text-decoration: none;
  color: #fff;
  a {
    margin: 0;
    font-size: 1.95em;
    padding: 10px 30px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    font-family: "Bitter", serif;
    text-decoration: none;
    color: #fff;
  }
`;

export default Header;
