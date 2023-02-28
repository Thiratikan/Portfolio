import styled from "styled-components";

export const PROJECT = styled.div`
  margin-top: 150px;
  .DIV {
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
    margin: auto;
    align-items: center;
    margin-bottom: 150px;
  }
  .detail {
    margin-left: 100px;
  }
  img {
    height: 450px;
  }

  h1 {
    font-family: "Gugi", cursive;
    font-size: 80px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    text-indent: 80px;
    width: 700px;
    text-align: justify;
    text-justify: inter-character;
  }
  .title {
    font-family: "AvenirHeavy";
    color: #e5e5e5;
    font-size: 160px;
    position: absolute;
    z-index: -1;
    margin-left: 550px;
  }
  a img {
    height: 25px;
  }

  .github {
    margin-left: 20px;
  }

  @media only screen and (max-width: 1500px) {
    img {
      height: 400px;
    }
    h2 {
      font-size: 28px;
      width: 600px;
    }
    .title {
      font-size: 130px;
    }
  }
  @media only screen and (max-width: 1250px) {
    margin-top: 500px;
    .detail {
      margin-left: 40px;
    }
    img {
      height: 300px;
    }
    .title {
      font-size: 120px;
      margin-left: 380px;
    }
  }

  @media only screen and (max-width: 990px) {
    .DIV {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    .title {
      font-size: 120px;
      margin-left: 0px;
      margin-top: 350px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 200px;
    img {
      height: 250px;
      width: 250px;
    }
    a img {
      height: 25px;
      width: 25px;
    }
    .detail {
      margin-left: 20px;
    }

    h1 {
      font-family: "Gugi", cursive;
      font-size: 40px;
    }
    h2 {
      font-family: "Roboto", sans-serif;
      text-indent: 80px;
      width: 350px;
      font-size: 20px;
    }
    .title {
      font-size: 70px;
      margin-top: 200px;
    }
  }
`;
