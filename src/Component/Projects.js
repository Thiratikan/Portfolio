import React from "react";
import { Title, PROJECT } from "../style/PortStyle";
import Data from "./projectsData.json";
import TechTap from "./TechTap";

function Projects() {
  return (
    <PROJECT id="projects">
<<<<<<< HEAD
      <Info>
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
=======
      {Data.data.map((item) => {
        const { id, imgcover, title, desc } = item;
        return (
          <div key={id}>
            <Title>PROJECTS</Title>
            <div>
              <img src={imgcover} alt={""} />
              <h1>{title}</h1>
              <h2>{desc}</h2>
>>>>>>> bdaafdd3dd5efd1970d44425b9d47565b1372d23
            </div>
          </div>
        );
      })}
    </PROJECT>
  );
}

export default Projects;
