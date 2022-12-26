import React from "react";
import styled from "styled-components";

function Navbar() {
  const Nav = styled.div`
    background: transparent;
    padding: 20px;
    font-family: "AvenirLight";
    font-size: 20px;
    ul {
      display: flex;
      flex-direction: row;
      space-between: center;
      justify-content: end;
    }
    li {
      margin-right: 80px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    @media only screen and (max-width: 600px) {
      li {
        margin-right: 15px;
      }
    }
  `;
  return (
    <Nav>
      <ul>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contract">Contract</a>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
