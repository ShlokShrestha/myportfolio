import React from "react";

const Contact = () => {
  return (
    <div
      className="lg:py-20 lg:px-24 py-16 px-10 lg:text-left md:text-left text-center bg-gray-100"
      id="contact"
    >
      <div className="mb-5">
        <h4 className="mb-1 text-2xl font-bold ">CONTACT</h4>
        <h3>Don't be shy! Hit me up! 👇</h3>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-6 mt-7">
        <div class="flex lg:flex-row  md:flex-row flex-col items-center gap-6">
          <span className="bg-white rounded-full md:p-6 p-4 shadow-lg">
            <i class="fa-solid fa-map-location-dot text-blue-600 text-3xl"></i>
          </span>
          <div class="contact-info">
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
        <div class="flex lg:flex-row md:flex-row  flex-col items-center gap-6">
          <span className="bg-white rounded-full md:p-6 p-4 shadow-lg">
            <i class="fa-solid fa-envelope-open-text  text-blue-600 text-3xl"></i>
          </span>
          <div class="contact-info">
            <h3>Mail</h3>
            <a href="mailto:shlokstha99@gmail.com">shlokstha99@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
