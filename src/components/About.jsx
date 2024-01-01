import React from "react";
import aboutme from "../assets/img/aboutme.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Resume from "../assets/img/SHLOK SHRESTHA CV.pdf";
const About = () => {
  return (
    <div className="lg:py-20 lg:px-24 py-10 h-full px-4" id="about">
      <div className="max-w-[65rem] mx-auto title mb-8 text-gray-600">
        <h4 className="text-3xl font-bold text-center relative pb-4 uppercase">
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
          <div className="lg:w-[25rem] md:w-[25rem] w-[15rem] mx-auto">
            <img src={aboutme} alt="abc" className="object-cover  " />
          </div>
          <div className="lg:w-[40rem] md:w-[40rem] lg:ml-5 w-full px-4 lg:text-left text-center">
            <p className="md:text-3xl text-2xl font-semibold text-gray-500 mb-2 mt-3">
              Mern Stack Developer
            </p>
            <p className="text-justify ">
              Aspiring computer science enthusiast with a passion for learning
              and problem-solving. Eager to contribute and grow in the tech
              industry.
            </p>
            <div className="flex justify-between my-3 flex-wrap">
              <ul>
                <li className="mb-2 flex">
                  <MdKeyboardArrowRight size={25} className="text-blue-800" />
                  <strong className="font-semibold text-zinc-800">
                    Birthday:
                  </strong>
                  &nbsp;Aug 05 1999
                </li>
                <li className="mb-2 flex">
                  <MdKeyboardArrowRight size={25} className="text-blue-800" />
                  <strong className="font-semibold text-zinc-800">
                    Phone:
                  </strong>
                  &nbsp;+977-9862230119
                </li>
                <li className="mb-2 flex">
                  <MdKeyboardArrowRight size={25} className="text-blue-800" />
                  <strong className="font-semibold text-zinc-800">City:</strong>
                  &nbsp;Kathmandu, Nepal
                </li>
              </ul>
              <ul>
                <li className="mb-2 flex">
                  <MdKeyboardArrowRight size={25} className="text-blue-800" />
                  <strong className="font-semibold text-zinc-800">Age:</strong>
                  &nbsp;24
                </li>
                <li className="mb-2 flex">
                  <MdKeyboardArrowRight size={25} className="text-blue-800" />
                  <strong className="font-semibold text-zinc-800">
                    Degree:
                  </strong>
                  &nbsp;B.Sc. CSIT
                </li>
                <li className="mb-2 flex">
                  <MdKeyboardArrowRight size={25} className="text-blue-800" />
                  <strong className="font-semibold text-zinc-800">
                    Email:
                  </strong>
                  &nbsp;shlokstha99@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <p className="text-3xl font-semibold text-gray-500 mb-2 sm:mt-2">
                Skill
              </p>
              <p className="text-justify ">
                HTML, CSS, JavaScript, Bootstrap, ReactJS, Redux, Redux Toolkit,
                Tailwind CSS, SCSS, Node.js, Express, MongoDB.
              </p>
            </div>
            <div className="my-3">
              <button class="button">
                {/* <span class="button-content">Download CV</span> */}
                <a class="button-content" href={Resume} download="SHLOK SHRESTHA CV.pdf">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
