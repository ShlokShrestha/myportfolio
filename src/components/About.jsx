import React from "react";
import aboutme from "../assets/img/aboutme.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
const About = () => {
  return (
    <div className="lg:py-20 lg:px-24 py-10 h-full px-4" id="about">
      <div className="max-w-[65rem] mx-auto title mb-8 ">
        <h4 className="text-2xl font-bold text-center relative pb-4">
          About Me
        </h4>
        <p className="text-center my-4">
          Hello! I'm Shlok Shrestha, a recent graduate with a focus on the MERN
          stack. Proficient in React.js, Node.js, Express.js, and MongoDB. Eager
          to apply knowledge gained through personal projects in a professional
          setting. Enthusiastically seeking entry-level opportunities to apply
          and expand my skills, contribute to impactful projects, and grow
          within a dynamic development team.
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="max-w-[75rem] flex flex-col lg:flex-row">
          <div className="lg:w-[25rem] md:w-[25rem] mx-auto">
            <img src={aboutme} alt="abc" className="object-cover  " />
          </div>
          <div className="lg:w-[40rem] md:w-[40rem] lg:ml-5 w-full px-4 lg:text-left text-center">
            <p className="text-3xl font-semibold text-gray-500 mb-2 sm:mt-2">
              Mern Stack Developer
            </p>
            <p className="text-justify italic">
              Aspiring computer science enthusiast with a passion for learning
              and problem-solving. Eager to contribute and grow in the tech
              industry.
            </p>
            <div className="flex justify-between">
              <ul>
                <li className="font-semibold my-2 flex">
                
                  <MdKeyboardArrowRight size={25}/>
                  Birthday
                </li>
                <li className="font-semibold my-2">Website</li>
                <li className="font-semibold my-2">Birthday</li>
              </ul>
              <ul>
                <li>Birthday</li>
                <li>Birthday</li>
                <li>Birthday</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
