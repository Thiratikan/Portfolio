import Navbar from "./Navbar";
import Introduce from "./Introduce";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";
import Meandskills from "./Meandskills";

function Home() {
  const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    margin: 0;
  `;
  return (
    <Wrapper>
      <Navbar />
      <Introduce />
      <Meandskills />
      <Projects />
      <Contact />
    </Wrapper>
  );
}

export default Home;
