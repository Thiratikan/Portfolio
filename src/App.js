import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "./Component/Introduce";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
