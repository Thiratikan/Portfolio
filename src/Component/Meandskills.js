import React from "react";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import { Container } from "../style/AboutmeStyle";

function Meandskills() {
  return (
    <Container>
      <div>
        <div className="abtme">
          <Aboutme />
        </div>
        <div className="sk">
          <Skills />
        </div>
      </div>
    </Container>
  );
}

export default Meandskills;
