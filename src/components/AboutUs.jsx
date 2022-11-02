import React from "react";
import contract from "../assets/images/contract.png"
import AboutCardOne from "./About/AboutCardOne";
import AboutCardTwo from "./About/AboutCardTwo";

const AboutUs = () => {
  return (
    <div className="max-w-4xl md:mx-auto px-8 py-9">
      <div className="flex flex-col sm:flex-row">
        <div className="md:basis-1/2">
          <h2 className="text-4xl font-bold dark:text-white">
            Abouts Us and some of the Saas Features
          </h2>
          <p className="mb-2 text-lg font-normal text-gray-500 mt-8 lg:text-xl dark:text-gray-400">
            Lorem Ipsum available but the majority have suffered alteration in
            some form.
          </p>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Lorem Ipsum available.
          </p>
          <a
            href="https://flowbite.com/docs/getting-started/quickstart/"
            style={{ backgroundColor: "#0A2463" }}
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
          >
            Get started
          </a>
        </div>
        <div className="md:basis-1/2 self-center">
          <img
            className="w-full aspect-video"
            alt="about-us"
            src={contract}
          />
        </div>
      </div>
      <AboutCardOne />
      <AboutCardTwo />
    </div>
  );
};

export default AboutUs;
