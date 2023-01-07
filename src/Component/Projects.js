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
            <div key={id}>
              <div className="title">PROJECTS</div>
              <div>
                <img src={imgcover} alt={""} />
                <h1>{title}</h1>
                <h2>{desc}</h2>
                <a href={link} className="link">
                  <img src="./images/link.png" alt="" />
                </a>
                <a href={github} className="github">
                  <img src="./images/github-mark.png" alt="" />
                </a>
                {/* <button type="button" class="btn btn-secondary">
                  READ MORE
                </button> */}
              </div>
            </div>
          );
        })}
      </PROJECT>
    </Container>
  );
}

export default Projects;
