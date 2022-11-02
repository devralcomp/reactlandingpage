import React from "react";
import customer from "../assets/images/customer-review.gif"

const Hero = () => {
  return (
    <div className="md:container md:mx-auto px-8 py-9 text-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        We invest in the world’s potential
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <div className="flex flex-col mb-8 md:flex-row md:justify-center lg:justify-center">
        <a
          href="https://flowbite.com/docs/getting-started/quickstart/"
          style={{backgroundColor: "#0A2463"}}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
        >
          Get started
        </a>
        <a
          href="#components"
          className="text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-blue-600 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <span className="ml-2">Explore features</span>
        </a>
      </div>
      <div className="relative mx-auto mt-12 w-full max-w-4xl rounded-3xl border border-gray-300 shadow-2xl lg:mt-20 dark:border-gray-700 yt-video">
        <img
          src={customer}
          alt="software"
        />
      </div>
    </div>
  );
};

export default Hero;
