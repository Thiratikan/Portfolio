import React from "react";
import styled from "styled-components";
import { Title } from "../style/PortStyle";

function Experience() {
  const Container = styled.section`
    blackground-color: white;
    margin-top: 300px;
    p {
      font-family: "AvenirHeavy";
      color: #eee;
      font-size: 200px;
      margin-left: 50px;
      margin-top: -155px;
    }
    div {
    }
  `;

  const Body = styled.div``;
  return (
    <>
      <Container>
        <div>
          <Title id="experience">EXPERIENCE</Title>
          <p>& SKILLS</p>
          <Body></Body>
        </div>
      </Container>
    </>
  );
}

export default Experience;
