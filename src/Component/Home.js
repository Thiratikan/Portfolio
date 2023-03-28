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
      <section className="hidden">
        <Navbar />
      </section>
      <section className="hidden">
        <Introduce />
      </section>
      <section className="hidden">
        <Meandskills />
      </section>
      <section className="hidden">
        <Projects />
      </section>
      <section className="hidden">
        <Contact />
      </section>
    </Wrapper>
  );
}

export default Home;
