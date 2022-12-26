import React from "react";
import styled from "styled-components";
import { Title } from "../style/PortStyle";

function Experience() {
  const Container = styled.section`
    margin-top: 300px;
  `;

  const Body = styled.div``;
  return (
    <>
      <Container>
        <Title id="experience">EXPERIENCE</Title>
        <Body></Body>
      </Container>
    </>
  );
}

export default Experience;
