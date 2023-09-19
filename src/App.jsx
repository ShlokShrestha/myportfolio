import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill"
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <About />
      <Skill/>
      <Project />
      <Contact />
    </div>
  );
};

export default App;
