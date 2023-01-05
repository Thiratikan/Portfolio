import React from "react";
import { Title, PROJECT } from "../style/PortStyle";
import Data from "./projectsData.json";

function Projects() {
  return (
    <PROJECT id="projects">
      {Data.data.map((item) => {
        const { id, imgcover, title, desc } = item;
        return (
          <div key={id}>
            <Title>PROJECTS</Title>
            <div>
              <img src={imgcover} alt={""} />
              <h1>{title}</h1>
              <h2>{desc}</h2>
            </div>
          </div>
        );
      })}
    </PROJECT>
  );
}

export default Projects;
