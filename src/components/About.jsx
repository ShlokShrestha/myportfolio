import React from "react";
import aboutme from "../assets/img/Programming.gif";

const About = () => {
  return (
    <div className="lg:py-20 lg:px-24 py-10 h-full px-4" id="about">
      <div className="flex justify-center items-center h-full">
        <div className="max-w-[75rem] flex flex-col lg:flex-row">
          <div className="lg:w-[30rem] md:w-[30rem]  w-full">
            <img src={aboutme} alt="abc" className="object-cover" />
          </div>
          <div className="lg:w-[35rem] md:w-[30rem] lg:ml-5 w-full px-4 mt-5 lg:text-left text-center">
            <h4 className="mb-2 text-2xl font-bold">ABOUT ME</h4>
            <h3 className="mb-3 text-xl font-bold text-blue-600">
              A dedicated Front-End Developer based in Kathmandu, Nepal
            </h3>
            <p className="text-justify">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.
              With the expertise of a passionate, motivated and committed
              software developer, empower your personal or professional goals. I
              am dedicated to assisting people and organizations in realizing
              their maximum potential. I have a wealth of expertise and a
              successful track record in problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
