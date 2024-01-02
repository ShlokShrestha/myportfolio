import React from "react";

const Resume = () => {
  return (
    <>
      <div
        className="lg:py-20 lg:px-24 py-10 h-full px-4 "
        id="resume"
        data-aos="fade-up"
      >
        <div className="max-w-[65rem] mx-auto title mb-8 text-gray-600">
          <h4 className="text-3xl font-bold text-center relative pb-4 uppercase">
            Resume
          </h4>
          <p className="text-center my-4">My Academic and Experience :</p>
        </div>
        <div className="max-w-[65rem] grid lg:grid-cols-2 gap-6 text-gray-700 mx-auto ">
          <div>
            <h3 className="text-2xl font-semibold mt-2 mb-4">Education</h3>
            <div className="resume-item">
              <h1 className="text-lg font-bold text-blue-700 mb-3 leading-5">
                BACHELORS OF SCIENCE IN COMPUTER SCIENCE AND INFORMATION
                TECHNOLOGY
              </h1>
              <p className="m-2 text-sm font-semibold">2018-2023</p>
              <p className="mb-5 ms-2">Birat Kshitiz College, Biratnagar</p>
            </div>
            <div className="resume-item">
              <h1 className="text-lg font-bold text-blue-700 mb-3 leading-5">
                +2 SCIENCE (NEB)
              </h1>
              <p className="m-2 text-sm font-semibold">2016-2018</p>
              <p className="ms-2">
                Arniko Awasiya Secondary School, Biratnagar
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mt-2 mb-4">Experience</h3>
            <div className="resume-item">
              <h1 className="text-lg font-bold text-blue-700 mb-3 uppercase leading-5">
                React Developer Intern
              </h1>
              <p className="m-2 text-sm font-semibold">
                May 5 2023 - Oct 5 2023{" "}
              </p>
              <p className="m-2">SparkTech Incoporation, Biratnagar</p>
              <ul className="ps-6 mt-2">
                <li>
                  Build and maintain React.js applications, ensuring seamless
                  functionality and user experience.
                </li>
                <li>Collaborate on feature design and implementation.</li>
                <li>
                  Participate in UI/UX design aspects and integrate data using
                  RESTful APIs.
                </li>
                <li>
                  Write clean and efficient code, troubleshoot and resolve
                  technical issues promptly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
