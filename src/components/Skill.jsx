import React from "react";

const About = () => {
  return (
    <div className="lg:py-20 lg:px-24 py-10 h-full px-4 bg-gray-100" id="about">
      <div className=" w-full  mt-5 lg:text-left text-center">
        <h4 className="mb-4 text-2xl font-bold">MY SKILL</h4>
        {/* <h3 className="mb-3 text-xl font-bold text-blue-700">
          A dedicated Front-End Developer based in Kathmandu, Nepal
        </h3> */}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-white py-5 px-5 shadow-md rounded-lg">
          <h2 className="text-center font-semibold text-3xl mt-3 mb-6 text-blue-600">
            Frontend Developer
          </h2>
          <div className="text-center text-xl font-medium">
            <p className="my-1">HTML</p>
            <p className="my-1">CSS</p>
            <p className="my-1">JavaScript</p>
            <p className="my-1">SASS</p>
            <p className="my-1">Tailwind CSS</p>
            <p className="my-1">ReatJS</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;
