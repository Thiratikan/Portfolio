import React from "react";
import styled from "styled-components";

function Navbar() {
  const Nav = styled.div`
    background: transparent;
    font-family: "AvenirLight";
    font-size: 20px;
    display: flex;
    text-align: center;
    margin: auto;
    div {
      space-between: center;
      justify-content: end;
      padding: 20px;

      width: 100%;
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
      {/* <div>
        <a href="#experience">Experience</a>
      </div> */}
      <div>
        <a href="#projects">Projects</a>
      </div>
      <div>
        <a href="#contact">Contact</a>
      </div>
    </Nav>
  );
}

export default Navbar;
