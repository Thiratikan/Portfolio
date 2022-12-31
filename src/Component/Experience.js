import React from "react";
import styled from "styled-components";
import { Title } from "../style/PortStyle";

function Experience() {
  const Container = styled.section`
    blackground-color: white;
  `;

  const Body = styled.div``;
  return (
    <>
      <Container>
        <div>
          <Title id="experience">ABOUT ME</Title>

          <Body></Body>
        </div>
      </Container>
    </>
  );
}

export default Experience;
