import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill"
const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Skill/>
      <Project />
      <Contact />
    </>
  );
};

export default App;
