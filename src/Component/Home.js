import Navbar from "./Navbar";
import Introduce from "./Introduce";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";

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
      <Skills />
      <Projects />
      <Contact />
    </Wrapper>
  );
}

export default Home;
