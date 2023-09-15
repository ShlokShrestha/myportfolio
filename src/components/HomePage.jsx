import React from "react";
import me from "../assets/img/me.png"
const HomePage = () => {
  return (
    <div
      className=" h-full lg:px-40 lg:py-20 sm:p-10 p-6 bg-gray-100"
      id="homepage"
    >
      <div className="flex items-center justify-center lg:flex-row flex-col-reverse">
        <div className="lg:w-[30rem] md:w-[30rem] sm:w-[25rem]  relative">
          <div className="mt-4 text-center lg:text-left">
            <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-3xl lg:leading-tight lg:text-left font-bold text-gray-800 ">
              Front-End React Developer
            </h1>

            <p className="my-4 text-xl ">
              Hi, I'm Shlok Shrestha. A passionate Front-end React Developer
              based in Kathmandu, Nepal.
            </p>
            <div className="icon text-3xl mb-5">
              <a href="https://github.com/ShlokShrestha" target="#">
                <i class="fa-brands fa-github text-gray-800 mr-3"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shlok-shrestha-922554256/"
                target="#"
              >
                <i class="fa-brands fa-linkedin text-gray-800 mr-3"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:pl-8 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[16rem] ">
          <img src={me} alt="abc" className="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
