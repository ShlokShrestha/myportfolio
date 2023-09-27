import React from "react";
import aboutme from "../assets/img/Programming.gif";

const About = () => {
  return (
    <div className="lg:py-20 lg:px-24 py-10 h-full px-4 bg-gray-100" id="about">
      <div className="flex justify-center items-center h-full">
        <div className="max-w-[75rem] flex flex-col-reverse lg:flex-row-reverse">
          <div className="lg:w-[30rem] md:w-[30rem]  w-full">
            <img src={aboutme} alt="abc" className="object-cover" />
          </div>
          <div className="lg:w-[35rem] md:w-[30rem] lg:ml-5 w-full px-4 mt-5 lg:text-left text-center">
            <h4 className="mb-2 text-2xl font-bold">SKILL</h4>
            <h3 className="mb-3 text-xl font-bold text-blue-700">
              A dedicated Front-End Developer based in Kathmandu, Nepal
            </h3>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
