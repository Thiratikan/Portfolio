import React from "react";
import { PROJECT } from "../style/PortStyle";
import Data from "./projectsData.json";
import styled from "styled-components";

function Projects() {
  const Container = styled.div`
    height: 100vh;
  `;
  return (
    <Container>
      <PROJECT id="projects">
        {Data.data.map((item) => {
          const { id, imgcover, title, desc } = item;
          return (
            <div key={id}>
              <div className="title">PROJECTS</div>
              <div>
                <img src={imgcover} alt={""} />
                <h1>{title}</h1>
                <h2>{desc}</h2>
              </div>
            </div>
          );
        })}
      </PROJECT>
    </Container>
  );
}

export default Projects;
