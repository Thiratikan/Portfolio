import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-image: url("./images/BGskills.png");
  background-size: cover;
  margin-top: 20rem;

  /* border: 1px solid blue; */
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5rem;
  }
  .abtme {
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
      margin-right: 0px;
    }
    .abtme {
      margin-right: 0rem;
      margin-bottom: 5rem;
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
  @media only screen and (max-width: 990px) {
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
    }
    h2 {
      width: 23rem;
      align-items: center;
      font-size: 20px;
      margin: auto;
      margin-top: 20px;
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
