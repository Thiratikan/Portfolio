import React from "react";
import { Container, Picture, Name, Title } from "../style/IntroStyle";
import "animate.css";

function Introduce() {
  return (
    <>
      <Container>
        <Picture>
          <img src="/images/profilepic.PNG" alt="" />
        </Picture>
        <Name className="animate__animated animate__fadeIn">Thiratikan </Name>
        <Title className="animate__animated animate__pulse">
          WEB DEVELOPER
        </Title>
        <a href="/File/resume.pdf" download="Thiratikan_Resume">
          <button>
            <img src="/images/uploadbutton.png" alt="" />
            Resume
          </button>
        </a>
      </Container>
    </>
  );
}

export default Introduce;
