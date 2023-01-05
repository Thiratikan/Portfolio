import styled from "styled-components";

export const Title = styled.div`
  font-family: "AvenirHeavy";
  color: #e5e5e5;
  font-size: 160px;
  position: absolute;
  z-index: -1;
  margin-left: 620px;
  margin-top: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 78px;
    margin-left: 0px;
    margin-top: 290px;
  }
`;

export const PROJECT = styled.div`
margin-top: 200px;
  img {
    height: 450px;
    margin-left: 5%;
    margin-bottom: 100px;
  }
  div {
    background-image: none;
    display: grid;
  }
  h1 {
    font-family: "Gugi", cursive;
    font-size: 80px;
    position: absolute;
    margin-left: 950px;
    margin-top: -15px;
    width: 200px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    text-indent: 80px;
    position: absolute;
    width: 650px;
    margin-left: 720px;
    margin-top: 110px;
  }


  @media only screen and (max-width: 600px) {
    margin-top: 0px;
    img {
      height: 250px;
      width: 300px;
      margin: 0;
      align-items: center;
      padding: 20px;
      margin-left: 20px;
      margin-bottom: 180px;
    }
    div {
      background-image: none;
      display: grid;
    }
    h1 {
      font-family: "Gugi", cursive;
      font-size: 30px;
      position: absolute;
      margin-left: 20px;
      
    }
    h2 {
      text-indent: 20px;
      position: absolute;
      font-size: 15px; 
      width: 350px;
      padding: 20px;
      margin-left: 0px;

  }
 
`;
