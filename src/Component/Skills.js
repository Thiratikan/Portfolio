import React from "react";
import styled from "styled-components";

function Skills() {
  const Container = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url("./images/BGskills.png");
    background-size: cover;

    /* border: 1px solid blue; */
  `;
  const Main = styled.section`
    color: black;

    h1 {
      margin-bottom: 50px;
      text-align: center;
      margin-top: 200px;
      padding-top: 120px;
      font-family: "Gugi", cursive;
      font-size: 80px;
      @media only screen and (max-width: 600px) {
        margin-top: 20px;
      }
    }
    ul {
      display: grid;
      align-items: center;
      row-gap: 35px;
      grid-template-columns: 215px 100px;
    }
    li {
      font-size: 20px;
      font-family: "Gugi", cursive;
    }
    div {
      border-style: solid;
      border-radius: 50px;
      border-color: black;
      padding: 60px;
      width: 300px;
      height: 220px;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      @media only screen and (max-width: 600px) {
        padding: 40px;
      }
    }
  `;
  return (
    <Container>
      <Main>
        <h1 id="skills">SKILLS</h1>
        <div>
          <ul>
            <li>&#9787; HTML</li>
            <li>&#9787; CSS</li>
            <li>&#9787; JavaScript</li>
            <li>&#9787; React.s</li>
            <li>&#9787; Bootstrap</li>
            <li>&#9787; Git</li>
            <li>&#9787; Python</li>
            <li>&#9787; Java</li>
          </ul>
        </div>
      </Main>
    </Container>
  );
}

export default Skills;
