import React from "react";
import me from "../assets/img/me.png";
const HomePage = () => {
  return (
    <div className=" h-full lg:px-40 lg:py-20 sm:p-10 p-6" id="homepage">
      <div className="flex items-center justify-center lg:flex-row flex-col-reverse">
        <div className="lg:w-[35rem] md:w-[30rem] sm:w-[25rem]">
          <div className="mt-4 text-center lg:text-left">
            <p className=" text-xl my-1 ">HEY THERE !</p>
            <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl lg:leading-tight lg:text-left font-bold text-gray-800 ">
              I am Shlok Shrestha
            </h1>
            <p className=" text-xl my-1 ">Passionate MERN Stack Developer</p>
            <div className="icon text-3xl my-3">
              <a href="https://github.com/ShlokShrestha" target="#">
                <i class="fa-brands fa-github text-gray-800 mr-3 hover:text-blue-700"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shlok-shrestha-922554256/"
                target="#"
              >
                <i class="fa-brands fa-linkedin text-gray-800 mr-3 hover:text-blue-700"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:pl-8 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[16rem] ">
          <img src={me} alt="abc" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
