import React from "react";
import styled from "styled-components";
import "animate.css";

function Introduce() {
  const Container = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: white;
    h1 {
      font-family: "AvenirRoman";
      font-size: 30px;
    }
    @media only screen and (max-width: 1000px) {
      h1 {
        width: 20rem;
        text-align: center;
        margin: auto;
        margin: 0;
        font-size: 15px;
      }
    }
  `;
  const Name = styled.div`
    font-family: "Yellowtail", cursive;
    text-align: center;
    font-size: 120px;

    @media only screen and (max-width: 600px) {
      font-size: 80px;
    }
  `;

  const Title = styled.div`
    font-family: "AvenirRoman";
    text-align: center;
    margin-top: -10px;
    font-size: 45px;
    @media only screen and (max-width: 600px) {
      font-size: 25px;
    }
  `;

  const Picture = styled.div`
    img {
      height: 320px;
    }
    @media only screen and (max-width: 600px) {
      margin-top: -200px;
      img {
        height: 220px;
      }
    }
  `;

  return (
    <>
      <Container>
        <Picture>
          <img src="/images/profilepic.PNG" alt="" />
        </Picture>
        <Name className="animate__animated animate__fadeIn">Thiratikan </Name>
        <Title className="animate__animated animate__pulse">
          FRONT-END DEVELOPER
        </Title>
      </Container>
    </>
  );
}

export default Introduce;
