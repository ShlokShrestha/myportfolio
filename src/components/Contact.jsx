import React from "react";

const Contact = () => {
  return (
    <div
      className="lg:py-20 lg:px-24 py-16 px-10 lg:text-left md:text-left text-center"
      id="contact"
      data-aos="fade-up"
    >
      <div className="title mb-8">
        <h4 className="text-2xl font-bold text-center relative pb-4">
          CONTACT
        </h4>
        <p className="text-center my-4">Don't be shy! Hit me up! 👇</p>
      </div>
      <div className="flex flex-col gap-6 mt-7">
        <div class="flex lg:flex-row  md:flex-row flex-col items-center gap-6">
          <span className="bg-white rounded-full md:p-6 p-4 shadow-md">
            <i class="fa-solid fa-map-location-dot text-blue-600 text-2xl"></i>
          </span>
          <div class="contact-info">
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
        <div class="flex lg:flex-row md:flex-row  flex-col items-center gap-6">
          <span className="bg-white rounded-full md:p-6 p-4 shadow-md">
            <i class="fa-solid fa-envelope-open-text  text-blue-600 text-2xl"></i>
          </span>
          <div class="contact-info">
            <h3>Mail</h3>
            <a href="mailto:shlokstha99@gmail.com">shlokstha99@gmail.com</a>
          </div>
        </div>
        <div class="flex lg:flex-row md:flex-row  flex-col items-center gap-6">
          <span className="bg-white rounded-full md:p-6 p-4 shadow-md">
            <i class="fa-solid fa-phone  text-blue-600 text-2xl"></i>
          </span>
          <div class="contact-info">
            <h3>Phone</h3>
            <a href="mailto:shlokstha99@gmail.com">+977-9862230119</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
