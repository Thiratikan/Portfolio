import Navbar from "./Navbar";
import Introduce from "./Introduce";
import Experience from "./Experience";
import Projects from "./Projects";
import Contract from "./Contract";

function Home() {
  return (
    <>
      <Navbar />
      <Introduce />
      <Experience />
      <Projects />
      <Contract />
    </>
  );
}

export default Home;
