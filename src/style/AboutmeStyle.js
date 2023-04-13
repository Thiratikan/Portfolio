import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;

  /* border: 1px solid blue; */
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10rem;
  }
  .abtme {
    background-image: url("./images/skBG.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
  }
  .sk {
    background-image: url("./images/skBG.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
  }

  @media only screen and (max-width: 1500px) {
    div {
      padding: 15px;
    }
    .abtme {
      margin-right: 5rem;
    }
  }

  @media only screen and (max-width: 1250px) {
    div {
      flex-direction: column;
      align-items: center;

      padding: 0px;
    }
    .abtme {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 600px) {
    div {
      flex-direction: column;
      align-items: center;

      padding: 0px;
    }
    .abtme {
      background-image: url("./images/skBG.png");
      background-position: center;
      background-size: cover;
    }
    .sk {
      background-image: url("./images/skBG.png");
      background-position: center;
      background-size: cover;
    }
  }
`;

export const Main = styled.section`
  color: black;
  h1 {
    text-align: center;
    font-family: "Gugi", cursive;
    font-size: 80px;
    width: 30rem;
  }
  h2 {
    font-family: "AvenirLight";
    width: 40rem;
    margin-top: 4rem;
    text-indent: 60px;
    text-align: justify;
    text-justify: inter-character;
  }
  ul {
    display: grid;
    align-items: center;
    row-gap: 20px;
    grid-template-columns: 160px 160px 130px;
    margin-top: -25px;
  }
  li {
    font-size: 18px;
    font-family: "Gugi", cursive;
  }
  .skill {
    border-style: solid;
    border-radius: 50px;
    border-color: black;
    padding: 50px;
    width: 500px;
    height: 360px;
    margin-top: 4rem;
  }

  @media only screen and (max-width: 1500px) {
    h2 {
      width: 35rem;
    }
  }

  @media only screen and (max-width: 1250px) {
    div {
      flex-direction: column;
      align-items: center;
    }
    h2 {
      width: 35rem;
    }
    h1 {
      align-items: center;
      margin: auto;
    }
    ul {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0rem;

    .skill {
      padding: 0px;
      padding-top: 20px;
      width: 350px;
      height: 250px;
      align-items: center;
      margin: auto;
      margin-top: 20px;
    }
    h1 {
      margin-top: 20px;
      font-size: 60px;
      padding: 20px;
      width: 100%;
    }
    h2 {
      width: 100%;
      align-items: center;
      font-size: 20px;
      margin: auto;
      margin-top: 5px;
      padding: 2rem;
    }
    ul {
      row-gap: 7px;
      grid-template-columns: 100px 100px 80px;
      align-items: center;
      margin-top: -5px;
    }
    li {
      font-size: 13px;
    }
  }
`;
