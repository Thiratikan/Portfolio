import React from "react";
import styled from "styled-components";
import "animate.css";

function Introduce() {
  const Container = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: white;

    /* border: 1px solid blue; */
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
    margin-top: 10px;
    font-size: 45px;
    @media only screen and (max-width: 600px) {
      font-size: 25px;
    }
  `;

  const Picture = styled.div`
    margin-top: 80px;
    img {
      height: 300px;
    }
    @media only screen and (max-width: 600px) {
      margin-top: 40px;
      img {
        height: 250px;
      }
    }
  `;

  return (
    <>
      <Container>
        <Picture>
          <img src="/images/profilepic.jpeg" alt="" />
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
