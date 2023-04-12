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

    .bg {
      background-image: url("./images/portBG.png");
      background-size: cover;
    }
  `;
  return (
    <Wrapper>
      <div className="bg">
        <section className="hidden">
          <Navbar />
        </section>
        <section className="hidden">
          <Introduce />
        </section>
      </div>
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
