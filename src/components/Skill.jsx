import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const About = () => {
  return (
    <div
      className="lg:py-20 lg:px-24 py-10 h-full px-4 text-gray-600 "
      id="skill"
    >
      <div className="max-w-[65rem] mx-auto title mb-8 ">
        <h4 className="text-3xl font-bold text-center relative pb-4 uppercase">
          My Skills
        </h4>
        <p className="text-center my-4">List of skills I posses</p>
      </div>
      <div className="max-w-[65rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-auto  ">
        <div className="bg-white py-5 px-5 shadow-md hover:drop-shadow-xl rounded-lg h-[20rem]">
          <div className="flex justify-center items-center mt-16 ">
            <FaHtml5 size={50} className="text-orange-600" />
            <FaCss3Alt size={50} className="text-blue-600" />
          </div>

          <div className="text-center text-xl font-medium">
            <h3 className="my-3 text-xl">HTML, CSS</h3>
            <p className="text-sm font-light">
              Design with flair using HTML and CSS for a crisp, stylish look.
            </p>
          </div>
        </div>
        <div className="bg-white py-5 px-5 shadow-md hover:drop-shadow-xl rounded-lg h-[20rem]">
          <div className="flex justify-center items-center mt-16 ">
            <IoLogoJavascript size={50} className="text-yellow-500" />
          </div>

          <div className="text-center text-xl font-medium">
            <h3 className="my-3 text-xl">Javascript</h3>
            <p className="text-sm font-light">
              Elevates web interactivity with seamless integration and
              versatility.
            </p>
          </div>
        </div>
        <div className="bg-white py-5 px-5 shadow-md hover:drop-shadow-xl rounded-lg h-[20rem]">
          <div className="flex justify-center items-center mt-16 ">
            <FaReact size={50} className="text-lg text-rose-700" />
          </div>

          <div className="text-center text-xl font-medium">
            <h3 className="my-3 text-xl">React JS</h3>
            <p className="text-sm font-light">
              Skilled in React and Redux for efficient web app development.
            </p>
          </div>
        </div>
        <div className="bg-white py-5 px-5 shadow-md hover:drop-shadow-xl rounded-lg h-[20rem]">
          <div className="flex justify-center items-center mt-16 ">
            <FaNodeJs size={50} className="text-green-600" />
          </div>

          <div className="text-center text-xl font-medium">
            <h3 className="my-3 text-xl">Node JS, Express </h3>
            <p className="text-sm font-light">
              Building restful APIs in node and express
            </p>
          </div>
        </div>
        <div className="bg-white py-5 px-5 shadow-md hover:drop-shadow-xl rounded-lg h-[20rem]">
          <div className="flex justify-center items-center mt-16 ">
            <SiMongodb size={50} className="text-green-600" />
          </div>

          <div className="text-center text-xl font-medium">
            <h3 className="my-3 text-xl">MongoDB </h3>
            <p className="text-sm font-light">
              Proficient in MongoDB for robust and scalable database solutions.
            </p>
          </div>
        </div>
        <div className="bg-white py-5 px-5 shadow-md hover:drop-shadow-xl rounded-lg h-[20rem]">
          <div className="flex justify-center items-center mt-16 ">
            <TbBrandNextjs size={50} />
          </div>

          <div className="text-center text-xl font-medium">
            <h3 className="my-3 text-xl">Next JS </h3>
            <p className="text-sm font-light">
              Crafting dynamic web apps with server-side rendering finesse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
