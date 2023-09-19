import React from "react";

import Data from "../Data/PortfolioData";

const Project = () => {
  return (
    <div className="lg:py-20 lg:px-24 py-10 px-4 " id="project">
      <div className="project-detail">
        <div className="title mb-7">
          <h4 className="mb-2 text-2xl font-bold lg:text-left text-center">PORTFOLIO</h4>
          <h3 className="lg:text-left text-center">
            I deliver top-notch projects using modern technologies and maintain
            a focus on efficient and clean code.
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-6 mx-auto">
          {Data.map((item) => (
            <div className="shadow-lg rounded-lg p-4 bg-white " key={item.id}>
              <div className="project-show-details ">
                <div className="left-side overflow-hidden">
                  <img
                    src={item.img}
                    alt="aa"
                    className="hover:scale-110 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="right-side">
                  <h3 className="text-2xl font-semibold mt-5 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-justify">{item.desc}</p>
                  <div className="flex justify-center items-center py-5">
                    <a
                      target="_blank"
                      href={item.github}
                      rel="noreferrer"
                      className="text-gray-800 text-md font-medium pr-5 hover:text-blue-700" 
                    >
                      Code <i className="fa-brands fa-github text-xl"></i>
                    </a>
                    <a
                      target="_blank"
                      href={item.vercel}
                      rel="noreferrer"
                      className="text-gray-800 text-md font-medium pr-5 hover:text-blue-700"
                    >
                      Live Demo
                      <i className="fa-solid fa-arrow-up-right-from-square link-icon ps-2 text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
