import Navbar from "./Navbar";
import Introduce from "./Introduce";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { Title } from "../style/PortStyle";

function Home() {
  return (
    <>
      <Navbar />

      <Introduce />

      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;
