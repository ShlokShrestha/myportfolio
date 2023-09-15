import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
