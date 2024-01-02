import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Resume />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default App;
