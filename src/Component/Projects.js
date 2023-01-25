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
          const { id, imgcover, title, desc, link, github } = item;
          return (
            <div className="DIV" key={id}>
              <img src={imgcover} alt={""} />
              <div className="title">PROJECTS</div>
              <div className="detail">
                <h1>{title}</h1>
                <h2>{desc}</h2>
                <a href={link} className="link">
                  <img src="./images/link.png" alt="" />
                </a>
                <a href={github} className="github">
                  <img src="./images/github-mark.png" alt="" />
                </a>
              </div>
              {/* <button type="button" class="btn btn-secondary">
                  READ MORE
                </button> */}
            </div>
          );
        })}
      </PROJECT>
    </Container>
  );
}

export default Projects;
